'use client';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import type { Project } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import 'swiper/css';

export function ProjectCarousel({ projects }: { projects: readonly Project[] }) {
  return (
    <div className="relative">
      <button
        type="button"
        className="project-slider-prev absolute -left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-800 backdrop-blur transition-all hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-900"
        aria-label="Previous projects"
      >
        <FiChevronLeft size={22} />
      </button>
      <button
        type="button"
        className="project-slider-next absolute -right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-800 backdrop-blur transition-all hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-900"
        aria-label="Next projects"
      >
        <FiChevronRight size={22} />
      </button>
      <Swiper
        modules={[Navigation]}
        spaceBetween={18}
        slidesPerView={1}
        speed={450}
        loop
        navigation={{ prevEl: '.project-slider-prev', nextEl: '.project-slider-next' }}
        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="px-1">
              <ProjectCard project={project} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
