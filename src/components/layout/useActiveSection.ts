'use client';

import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: readonly string[], enabled: boolean): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? 'hero');
  const idsKey = sectionIds.join('|');

  useEffect(() => {
    if (!enabled) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);

        if (visibleEntries[0]?.target.id) setActiveId(visibleEntries[0].target.id);
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [enabled, idsKey, sectionIds]);

  return activeId;
}
