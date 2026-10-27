import { Gamepad2, Palette, Layout } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import CoverFlowCarousel from '@/components/CoverFlowCarousel';
import { projectWorks, artPropsWorks, uiWorks } from '@/data/works';

export default function Works() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Our Works</h1>
          <p className="page-header__description">
            Explore our portfolio divided across playable game projects, 3D art &amp; props,
            and specialized UI design — engineered from concept to production.
          </p>

          {/* Quick Jump Anchor Tabs */}
          <div className="works-anchor-bar">
            <button
              type="button"
              className="works-anchor-btn"
              onClick={() => scrollToSection('section-projects')}
            >
              <Gamepad2 size={16} />
              <span>Projects ({projectWorks.length})</span>
            </button>
            <button
              type="button"
              className="works-anchor-btn"
              onClick={() => scrollToSection('section-art-props')}
            >
              <Palette size={16} />
              <span>Art &amp; Props ({artPropsWorks.length})</span>
            </button>
            <button
              type="button"
              className="works-anchor-btn"
              onClick={() => scrollToSection('section-ui')}
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
              description="Modular building kits, hard-surface props, environmental art, and custom shaders crafted for real-time game engines."
            />
          </div>

          <CoverFlowCarousel items={artPropsWorks} sectionId="art-props-carousel" />
        </div>
      </section>

      {/* ── Section 3: UI ── */}
      <section className="works-section" id="section-ui">
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
        description="Whether you need complete game development, 3D prop assets, or custom UI engineering — let's build it together."
        buttonText="Get in Touch"
        buttonTo="/contact"
      />
    </>
  );
}
