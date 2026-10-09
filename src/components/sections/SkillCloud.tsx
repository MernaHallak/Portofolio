'use client';

import type { CSSProperties } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';
import { FiLayers, FiServer } from 'react-icons/fi';
import type { IconType } from 'react-icons';
import {
  SiAxios,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJavascript,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';
import { skills, type SkillIconKey } from '../../data/site';
import { createSkillCloudLayout, type SkillCloudPosition } from '../../lib/skill-cloud-layout';

type IconConfig = {
  Icon: IconType;
  className: string;
  glow: string;
};

const iconRegistry: Record<SkillIconKey, IconConfig> = {
  react: { Icon: SiReact, className: 'text-cyan-500 dark:text-cyan-300', glow: '#38bdf8' },
  nextjs: { Icon: SiNextdotjs, className: 'text-ink', glow: '#a8a29e' },
  javascript: {
    Icon: SiJavascript,
    className: 'text-yellow-600 dark:text-yellow-300',
    glow: '#eab308',
  },
  tailwind: {
    Icon: SiTailwindcss,
    className: 'text-sky-500 dark:text-sky-300',
    glow: '#38bdf8',
  },
  rest: { Icon: FiServer, className: 'text-slate-600 dark:text-stone-200', glow: '#94a3b8' },
  context: { Icon: FiLayers, className: 'text-violet-500 dark:text-violet-300', glow: '#a78bfa' },
  axios: { Icon: SiAxios, className: 'text-indigo-500 dark:text-indigo-300', glow: '#818cf8' },
  git: { Icon: SiGit, className: 'text-orange-600 dark:text-orange-300', glow: '#f97316' },
  github: { Icon: SiGithub, className: 'text-ink', glow: '#a8a29e' },
  'github-actions': {
    Icon: SiGithubactions,
    className: 'text-blue-500 dark:text-blue-300',
    glow: '#60a5fa',
  },
  postman: { Icon: SiPostman, className: 'text-orange-500 dark:text-orange-300', glow: '#fb923c' },
  bootstrap: {
    Icon: SiBootstrap,
    className: 'text-violet-600 dark:text-violet-300',
    glow: '#8b5cf6',
  },
};

export function SkillCloud() {
  const cloudRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<SkillCloudPosition[]>([]);

  useLayoutEffect(() => {
    const cloud = cloudRef.current;
    if (!cloud) return;

    let frame = 0;
    let previousWidth = 0;
    let previousHeight = 0;

    const updateLayout = () => {
      const { width, height } = cloud.getBoundingClientRect();
      const roundedWidth = Math.round(width);
      const roundedHeight = Math.round(height);

      if (!roundedWidth || !roundedHeight) return;
      if (roundedWidth === previousWidth && roundedHeight === previousHeight) return;

      previousWidth = roundedWidth;
      previousHeight = roundedHeight;
      setPositions(createSkillCloudLayout(skills, { width: roundedWidth, height: roundedHeight }));
    };

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateLayout);
    });

    observer.observe(cloud);
    updateLayout();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  const positionsById = new Map(positions.map((position) => [position.id, position]));

  return (
    <div
      ref={cloudRef}
      className={`skill-cloud ${positions.length ? 'skill-cloud--ready' : ''}`}
      aria-hidden="true"
    >
      {skills.map((skill) => {
        const { Icon, className, glow } = iconRegistry[skill.icon];
        const position = positionsById.get(skill.id);

        return (
          <div
            key={skill.id}
            className="skill-cloud__item"
            style={
              {
                '--skill-glow': glow,
                '--skill-size': position ? `${position.size}px` : '0px',
                '--skill-x': position ? `${position.x}px` : '50%',
                '--skill-y': position ? `${position.y}px` : '50%',
              } as CSSProperties
            }
          >
            <span className="skill-cloud__halo" />
            <span className="skill-cloud__surface">
              <Icon className={className} aria-hidden="true" />
            </span>
          </div>
        );
      })}
    </div>
  );
}
