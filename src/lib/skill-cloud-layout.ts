import { forceCollide, forceSimulation, forceX, forceY, type SimulationNodeDatum } from 'd3-force';

export type SkillCloudLayoutItem = {
  id: string;
  prominence: 'featured' | 'medium' | 'supporting';
};

export type SkillCloudPosition = {
  id: string;
  x: number;
  y: number;
  size: number;
};

type ForceNode = SimulationNodeDatum & {
  id: string;
  radius: number;
  targetX: number;
  targetY: number;
};

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

function hashId(value: string) {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function createDeterministicRandom(seed: number) {
  let state = seed || 1;

  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function getRadius(
  prominence: SkillCloudLayoutItem['prominence'],
  densityRadius: number,
  isMobile: boolean,
) {
  const baseRadius = isMobile
    ? { featured: 31, medium: 28, supporting: 26 }
    : { featured: 42, medium: 34, supporting: 31 };
  const densityMultiplier = { featured: 1, medium: 0.88, supporting: 0.8 };

  return Math.min(baseRadius[prominence], densityRadius * densityMultiplier[prominence]);
}

export function createSkillCloudLayout(
  items: readonly SkillCloudLayoutItem[],
  dimensions: { width: number; height: number },
): SkillCloudPosition[] {
  const { width, height } = dimensions;

  if (!items.length || width <= 0 || height <= 0) return [];

  const isMobile = height <= 340;
  const containerPadding = Math.max(16, Math.min(width, height) * 0.045);
  const availableWidth = Math.max(1, width - containerPadding * 2);
  const availableHeight = Math.max(1, height - containerPadding * 2);
  const densityRadius = Math.max(
    18,
    Math.sqrt((availableWidth * availableHeight) / items.length) * 0.32,
  );
  const boundaryHalo = isMobile ? 11 : 13;
  const collisionGap = isMobile ? 5 : 8;
  const orderedItems = [...items].sort((first, second) => hashId(first.id) - hashId(second.id));
  const seed = orderedItems.reduce((total, item) => total ^ hashId(item.id), 0);
  const nodes: ForceNode[] = orderedItems.map((item, index) => {
    const hash = hashId(item.id);
    const phase = ((hash % 1000) / 1000 - 0.5) * 0.45;
    const angle = index * GOLDEN_ANGLE + phase;
    const radialDistance = 0.18 + Math.sqrt((index + 0.5) / orderedItems.length) * 0.67;
    const radius = getRadius(item.prominence, densityRadius, isMobile);
    const horizontalRange = Math.max(0, width / 2 - containerPadding - radius - boundaryHalo);
    const verticalRange = Math.max(0, height / 2 - containerPadding - radius - boundaryHalo);
    const targetX = width / 2 + Math.cos(angle) * horizontalRange * radialDistance;
    const targetY = height / 2 + Math.sin(angle) * verticalRange * radialDistance;

    return { id: item.id, radius, targetX, targetY, x: targetX, y: targetY };
  });

  const keepWithinBounds = () => {
    for (const node of nodes) {
      const edge = containerPadding + node.radius + boundaryHalo;
      node.x = clamp(node.x ?? node.targetX, edge, width - edge);
      node.y = clamp(node.y ?? node.targetY, edge, height - edge);
    }
  };

  const resolveCollisions = () => {
    for (let iteration = 0; iteration < 120; iteration += 1) {
      for (let index = 0; index < nodes.length; index += 1) {
        const first = nodes[index];

        for (let compareIndex = index + 1; compareIndex < nodes.length; compareIndex += 1) {
          const second = nodes[compareIndex];
          const deltaX = (second.x ?? second.targetX) - (first.x ?? first.targetX);
          const deltaY = (second.y ?? second.targetY) - (first.y ?? first.targetY);
          const distance = Math.hypot(deltaX, deltaY);
          const minimumDistance = (first.radius + second.radius) * Math.SQRT2 + collisionGap;

          if (distance >= minimumDistance) continue;

          const fallbackAngle = ((hashId(first.id) ^ hashId(second.id)) % 360) * (Math.PI / 180);
          const directionX = distance ? deltaX / distance : Math.cos(fallbackAngle);
          const directionY = distance ? deltaY / distance : Math.sin(fallbackAngle);
          const adjustment = (minimumDistance - distance) / 2;

          first.x = (first.x ?? first.targetX) - directionX * adjustment;
          first.y = (first.y ?? first.targetY) - directionY * adjustment;
          second.x = (second.x ?? second.targetX) + directionX * adjustment;
          second.y = (second.y ?? second.targetY) + directionY * adjustment;
        }
      }

      keepWithinBounds();
    }
  };

  forceSimulation(nodes)
    .randomSource(createDeterministicRandom(seed))
    .alpha(1)
    .alphaDecay(0.035)
    .velocityDecay(0.56)
    .force('x', forceX<ForceNode>((node) => node.targetX).strength(0.11))
    .force('y', forceY<ForceNode>((node) => node.targetY).strength(0.11))
    .force(
      'collide',
      forceCollide<ForceNode>((node) => node.radius * Math.SQRT2 + collisionGap).iterations(6),
    )
    .force('bounds', keepWithinBounds)
    .stop()
    .tick(360);

  resolveCollisions();

  return nodes.map((node) => ({
    id: node.id,
    x: Math.round((node.x ?? node.targetX) * 100) / 100,
    y: Math.round((node.y ?? node.targetY) * 100) / 100,
    size: Math.round(node.radius * 2 * 100) / 100,
  }));
}
