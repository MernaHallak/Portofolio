'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import type { ProjectImage } from '../../data/projects';

type ProjectImageGalleryProps = {
  images: readonly ProjectImage[];
  projectTitle: string;
};

export function ProjectImageGallery({ images, projectTitle }: ProjectImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeImage = images[selectedIndex] ?? images[0];
  const hasMultipleImages = images.length > 1;

  if (!activeImage) return null;

  const selectPrevious = () => {
    setSelectedIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length);
  };

  const selectNext = () => {
    setSelectedIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  return (
    <section aria-label={`${projectTitle} image gallery`}>
      <figure className="overflow-hidden rounded-2xl border border-line bg-mutedSurface shadow-lift">
        <div className="relative aspect-[16/10] bg-mutedSurface">
          <Image
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt ?? `${projectTitle} project preview`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-contain p-3 transition-opacity duration-200 sm:p-5"
          />
        </div>
        {activeImage.caption ? (
          <figcaption className="border-t border-line px-5 py-3 text-sm text-muted">
            {activeImage.caption}
          </figcaption>
        ) : null}
      </figure>

      {hasMultipleImages ? (
        <div className="mt-3 flex items-center gap-3">
          <div className="flex shrink-0 items-center gap-1" aria-label="Image navigation">
            <button
              type="button"
              onClick={selectPrevious}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-ink transition-colors hover:border-accent hover:text-accent"
              aria-label="Previous project image"
            >
              <FiChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={selectNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-ink transition-colors hover:border-accent hover:text-accent"
              aria-label="Next project image"
            >
              <FiChevronRight size={20} aria-hidden="true" />
            </button>
          </div>

          <div
            className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1"
            aria-label="Project image thumbnails"
          >
            {images.map((image, index) => {
              const isSelected = index === selectedIndex;

              return (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`relative h-11 w-16 shrink-0 overflow-hidden rounded-lg border bg-mutedSurface transition-colors sm:h-12 sm:w-20 ${
                    isSelected
                      ? 'border-accent ring-2 ring-accentSoft'
                      : 'border-line hover:border-strongLine'
                  }`}
                  aria-label={`Show image ${index + 1} of ${images.length}`}
                  aria-current={isSelected ? 'true' : undefined}
                >
                  <Image src={image.src} alt="" fill sizes="80px" className="object-cover p-0.5" />
                </button>
              );
            })}
          </div>
          <p className="shrink-0 text-sm font-bold text-muted" aria-live="polite">
            {selectedIndex + 1} / {images.length}
          </p>
        </div>
      ) : null}
    </section>
  );
}
