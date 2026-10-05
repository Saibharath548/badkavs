import { Link } from 'react-router-dom';
import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      {/* Background effects */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow" />
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" aria-hidden="true" />
          Game Development &amp; Creative Services
        </div>

        <h1 className="hero__title">
          <span className="gradient-text">{siteConfig.tagline}</span>
        </h1>

        <p className="hero__subtitle">
          {siteConfig.name} provides game development, art, design, technical art, and creative
          services — from initial concept to final implementation.
        </p>

        <div className="hero__actions">
          <Link to="/services" className="btn btn--primary btn--lg">
            Explore Services
          </Link>
          <Link to="/contact" className="btn btn--secondary btn--lg">
            Work With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
