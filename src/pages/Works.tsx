import { useState, useMemo } from 'react';
import { Gamepad2, Palette, Layers, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { works, type Work, type WorkCategory } from '@/data/works';

const CATEGORIES: { id: WorkCategory | 'all'; label: string; icon: React.ReactNode }[] = [
  { id: 'all',   label: 'All',   icon: <Layers size={16} /> },
  { id: 'games', label: 'Games', icon: <Gamepad2 size={16} /> },
  { id: 'art',   label: 'Art',   icon: <Palette size={16} /> },
  { id: 'other', label: 'Other', icon: <Layers size={16} /> },
];

const CATEGORY_ICON: Record<WorkCategory, React.ReactNode> = {
  games: <Gamepad2 size={40} />,
  art:   <Palette size={40} />,
  other: <Layers size={40} />,
};

const CATEGORY_LABEL: Record<WorkCategory, string> = {
  games: 'Game',
  art:   'Art',
  other: 'Other',
};

function WorkThumbnail({ work }: { work: Work }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (work.image && !imgFailed) {
    return (
      <img
        src={work.image}
        alt={work.title}
        className="work-card__img"
        loading="lazy"
        onError={() => setImgFailed(true)}
      />
    );
  }

  return (
    <div className="work-card__img-placeholder" aria-hidden="true">
      {CATEGORY_ICON[work.category]}
    </div>
  );
}

export default function Works() {
  const [active, setActive] = useState<WorkCategory | 'all'>('all');

  const filtered = useMemo(() => {
    if (active === 'all') return works;
    return works.filter((w) => w.category === active);
  }, [active]);

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Our Works</h1>
          <p className="page-header__description">
            Games we&apos;ve built, worlds we&apos;ve shaped, and art we&apos;ve created — a
            showcase of what BadCaws is all about.
          </p>
        </div>
      </div>

      {/* Works Gallery */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Category Filter */}
          <div className="works-filter" role="tablist" aria-label="Filter works by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active === cat.id}
                className={`works-filter__btn ${active === cat.id ? 'works-filter__btn--active' : ''}`}
                onClick={() => setActive(cat.id as WorkCategory | 'all')}
              >
                <span className="works-filter__icon" aria-hidden="true">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="works-grid">
              {filtered.map((work) => (
                <article key={work.id} className="work-card">
                  {/* Thumbnail */}
                  <div className="work-card__thumbnail">
                    <WorkThumbnail work={work} />
                    <span className="work-card__category-badge">
                      {CATEGORY_LABEL[work.category]}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="work-card__body">
                    <h3 className="work-card__title">{work.title}</h3>
                    <p className="work-card__description">{work.description}</p>

                    {work.tags && work.tags.length > 0 && (
                      <div className="work-card__tags">
                        {work.tags.map((tag) => (
                          <span key={tag} className="work-card__tag">{tag}</span>
                        ))}
                      </div>
                    )}

                    {work.link && (
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-card__link"
                        aria-label={`${work.linkLabel ?? 'View'} — ${work.title}`}
                      >
                        {work.linkLabel ?? 'View Project'}
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="works-empty">
              <SectionHeading
                label=""
                title="Coming Soon"
                description="We're working on it — check back shortly to see what we've been building."
              />
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Want to collaborate?"
        description="If you'd like to work with us on a game or creative project, we'd love to hear from you."
        buttonText="Get in Touch"
        buttonTo="/contact"
      />
    </>
  );
}
