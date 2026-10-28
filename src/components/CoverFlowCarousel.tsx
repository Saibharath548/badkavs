import { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Gamepad2, Palette, Mountain, Layout } from 'lucide-react';
import type { Work } from '@/data/works';

interface CoverFlowCarouselProps {
  items: Work[];
  sectionId?: string;
}

export default function CoverFlowCarousel({ items, sectionId }: CoverFlowCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const total = items.length;

  const goToNext = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  // Keyboard navigation when user interacts
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (touch) {
      touchStartX.current = touch.clientX;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touch = e.changedTouches[0];
    if (!touch) return;
    const diff = touchStartX.current - touch.clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    touchStartX.current = null;
  };

  if (total === 0) return null;

  const activeWork = items[activeIndex];

  return (
    <div
      className="coverflow-container"
      id={sectionId}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Works coverflow showcase"
    >
      {/* 3D Stage */}
      <div className="coverflow-stage">
        {/* Left Arrow Button */}
        <button
          type="button"
          className="coverflow-nav-btn coverflow-nav-btn--prev"
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Carousel Track */}
        <div className="coverflow-track">
          {items.map((item, index) => {
            // Calculate distance relative to active index with wrapping
            let diff = index - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;
            const isFarLeft = diff === -2;
            const isFarRight = diff === 2;
            const isVisible = Math.abs(diff) <= 2;

            let cardClass = 'coverflow-card';
            if (isCenter) cardClass += ' coverflow-card--active';
            else if (isLeft) cardClass += ' coverflow-card--left';
            else if (isRight) cardClass += ' coverflow-card--right';
            else if (isFarLeft) cardClass += ' coverflow-card--far-left';
            else if (isFarRight) cardClass += ' coverflow-card--far-right';
            else cardClass += ' coverflow-card--hidden';

            return (
              <div
                key={item.id}
                className={cardClass}
                onClick={() => {
                  if (!isCenter) goToIndex(index);
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${total}: ${item.title}`}
                style={{
                  display: isVisible ? 'block' : 'none',
                }}
              >
                <div className="coverflow-card__inner">
                  {item.video ? (
                    <video
                      src={item.video}
                      className="coverflow-card__media"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={item.image}
                    />
                  ) : item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="coverflow-card__media"
                      loading="lazy"
                    />
                  ) : (
                    <div className="coverflow-card__placeholder">
                      {item.category === 'projects' ? (
                        <Gamepad2 size={48} />
                      ) : item.category === 'art-props' ? (
                        <Palette size={48} />
                      ) : item.category === 'environments' ? (
                        <Mountain size={48} />
                      ) : (
                        <Layout size={48} />
                      )}
                      <span className="coverflow-card__placeholder-text">
                        {item.title}
                      </span>
                    </div>
                  )}

                  {/* Top-right subtle badge */}
                  <div className="coverflow-card__badge">
                    {item.category === 'projects'
                      ? 'Project'
                      : item.category === 'art-props'
                        ? 'Art & Props'
                        : item.category === 'environments'
                          ? 'Environment'
                          : 'UI'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          className="coverflow-nav-btn coverflow-nav-btn--next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Pagination dots & counter */}
      <div className="coverflow-controls">
        <div className="coverflow-dots">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`coverflow-dot ${i === activeIndex ? 'coverflow-dot--active' : ''}`}
              onClick={() => goToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="coverflow-counter">
          <span className="coverflow-counter__current">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className="coverflow-counter__divider">/</span>
          <span className="coverflow-counter__total">
            {String(total).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Active Work Details Card */}
      {activeWork && (
        <div className="coverflow-details">
          <div className="coverflow-details__header">
            <h3 className="coverflow-details__title">{activeWork.title}</h3>
            {activeWork.link && (
              <a
                href={activeWork.link}
                target="_blank"
                rel="noopener noreferrer"
                className="coverflow-details__cta"
              >
                <span>{activeWork.linkLabel ?? 'View Project'}</span>
                <ExternalLink size={15} />
              </a>
            )}
          </div>

          <p className="coverflow-details__description">{activeWork.description}</p>

          {activeWork.tags && activeWork.tags.length > 0 && (
            <div className="coverflow-details__tags">
              {activeWork.tags.map((tag) => (
                <span key={tag} className="coverflow-details__tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
