import { useState, useEffect } from 'react';
import { Gamepad2, Palette, Mountain, Layout } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import CoverFlowCarousel from '@/components/CoverFlowCarousel';
import { projectWorks, artPropsWorks, environmentsWorks, uiWorks } from '@/data/works';

export default function Works() {
  const [activeSection, setActiveSection] = useState<'projects' | 'art-props' | 'environments' | 'ui'>('projects');

  const scrollToSection = (id: string, sectionKey: 'projects' | 'art-props' | 'environments' | 'ui') => {
    setActiveSection(sectionKey);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Observe which section is currently in view
  useEffect(() => {
    const sectionIds: Array<{ id: string; key: 'projects' | 'art-props' | 'environments' | 'ui' }> = [
      { id: 'section-projects', key: 'projects' },
      { id: 'section-art-props', key: 'art-props' },
      { id: 'section-environments', key: 'environments' },
      { id: 'section-ui', key: 'ui' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = sectionIds.find((s) => s.id === entry.target.id);
            if (found) {
              setActiveSection(found.key);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Our Works</h1>
          <p className="page-header__description">
            Explore our portfolio divided across playable game projects, 3D art &amp; props,
            immersive environments, and specialized UI design — engineered from concept to production.
          </p>

          {/* Category Filter / Quick Jump Bar — styled identically to the Services page */}
          <div className="category-filter" style={{ marginTop: '2.5rem', marginBottom: '0.5rem', justifyContent: 'flex-start' }} role="tablist" aria-label="Navigate portfolio sections">
            <button
              type="button"
              className={`category-filter__btn ${activeSection === 'projects' ? 'category-filter__btn--active' : ''}`}
              onClick={() => scrollToSection('section-projects', 'projects')}
              role="tab"
              aria-selected={activeSection === 'projects'}
            >
              <Gamepad2 size={16} />
              <span>Projects ({projectWorks.length})</span>
            </button>
            <button
              type="button"
              className={`category-filter__btn ${activeSection === 'art-props' ? 'category-filter__btn--active' : ''}`}
              onClick={() => scrollToSection('section-art-props', 'art-props')}
              role="tab"
              aria-selected={activeSection === 'art-props'}
            >
              <Palette size={16} />
              <span>Art &amp; Props ({artPropsWorks.length})</span>
            </button>
            <button
              type="button"
              className={`category-filter__btn ${activeSection === 'environments' ? 'category-filter__btn--active' : ''}`}
              onClick={() => scrollToSection('section-environments', 'environments')}
              role="tab"
              aria-selected={activeSection === 'environments'}
            >
              <Mountain size={16} />
              <span>Environments ({environmentsWorks.length})</span>
            </button>
            <button
              type="button"
              className={`category-filter__btn ${activeSection === 'ui' ? 'category-filter__btn--active' : ''}`}
              onClick={() => scrollToSection('section-ui', 'ui')}
              role="tab"
              aria-selected={activeSection === 'ui'}
            >
              <Layout size={16} />
              <span>UI ({uiWorks.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Section 1: Projects (Top, following exact requested order) ── */}
      <section className="works-section" id="section-projects">
        <div className="container">
          <div className="works-section__header">
            <SectionHeading
              label="Interactive Games &amp; Prototypes"
              title="Projects"
              description="Playable games, interactive prototypes, and physics simulations developed across Unity and web platforms."
            />
          </div>

          <CoverFlowCarousel items={projectWorks} sectionId="projects-carousel" />
        </div>
      </section>

      {/* ── Section 2: Art and Props ── */}
      <section className="works-section works-section--alt" id="section-art-props">
        <div className="container">
          <div className="works-section__header">
            <SectionHeading
              label="3D &amp; 2D Production Assets"
              title="Art and Props"
              description="Modular building kits, hard-surface props, weapons, and custom shaders crafted for real-time game engines."
            />
          </div>

          <CoverFlowCarousel items={artPropsWorks} sectionId="art-props-carousel" />
        </div>
      </section>

      {/* ── Section 3: Environments ── */}
      <section className="works-section" id="section-environments">
        <div className="container">
          <div className="works-section__header">
            <SectionHeading
              label="World Building &amp; Level Design"
              title="Environments"
              description="Atmospheric sci-fi corridors, stylized fantasy ruins, and urban cyberpunk streetscapes engineered for immersive gameplay."
            />
          </div>

          <CoverFlowCarousel items={environmentsWorks} sectionId="environments-carousel" />
        </div>
      </section>

      {/* ── Section 4: UI ── */}
      <section className="works-section works-section--alt" id="section-ui">
        <div className="container">
          <div className="works-section__header">
            <SectionHeading
              label="Player Experience &amp; Game UI"
              title="UI / Interface Design"
              description="Game HUDs, tactile menu flows, inventory systems, and cross-platform UI components engineered for maximum clarity."
            />
          </div>

          <CoverFlowCarousel items={uiWorks} sectionId="ui-carousel" />
        </div>
      </section>

      {/* Collaboration CTA */}
      <CTASection
        title="Want to collaborate on your next release?"
        description="Whether you need complete game development, 3D prop assets, environments, or custom UI engineering — let's build it together."
        buttonText="Get in Touch"
        buttonTo="/contact"
      />
    </>
  );
}
