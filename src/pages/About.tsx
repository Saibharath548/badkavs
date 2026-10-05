import {
  Gamepad2,
  Code,
  Palette,
  Wrench,
  Layers,
  Target,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/config/site';
import { team } from '@/data/team';

export default function About() {
  return (
    <>
      {/* About Hero */}
      <div className="about-hero">
        <div className="container">
          <h1 className="about-hero__title">
            About <span className="gradient-text">{siteConfig.name}</span>
          </h1>
          <p className="about-hero__description">
            BADKAVS is a multidisciplinary game development and creative services
            group. We bring together programming, art, design, technical art, and
            creative production to help teams and individuals build their
            projects from concept to completion.
          </p>
        </div>
      </div>

      {/* What We Stand For */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <SectionHeading
            label="Our Focus"
            title="What Drives Us"
            description="We are a team built around games and creative technology."
          />
          <div className="about-values">
            {[
              {
                icon: <Gamepad2 size={22} />,
                title: 'Game Development',
                text: 'Games are at the core of everything we do. Our services are designed around real game development workflows and pipelines.',
              },
              {
                icon: <Code size={22} />,
                title: 'Programming',
                text: 'From gameplay systems and AI to editor tools and optimization — we write code that brings game designs to life.',
              },
              {
                icon: <Palette size={22} />,
                title: 'Art & Visual Design',
                text: '2D art, 3D modeling, texturing, and animation — we create visual content that defines the look and feel of your project.',
              },
              {
                icon: <Wrench size={22} />,
                title: 'Technical Art',
                text: 'We bridge the gap between art and engineering, optimizing pipelines, materials, and rendering workflows.',
              },
              {
                icon: <Layers size={22} />,
                title: 'Design & Documentation',
                text: 'From raw ideas to detailed GDDs and TDDs — we structure concepts into actionable development plans.',
              },
              {
                icon: <Target size={22} />,
                title: 'Creative Production',
                text: 'Video editing, photo editing, and media production to support marketing, trailers, and creative content needs.',
              },
            ].map((item) => (
              <div key={item.title} className="about-value-card">
                <div className="about-value-card__icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="about-value-card__title">{item.title}</h3>
                <p className="about-value-card__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="section"
        style={{ background: 'var(--color-bg-secondary)' }}
        aria-label="Our team"
      >
        <div className="container">
          <SectionHeading
            label="Team"
            title="Our Team"
            description="The people behind BADKAVS."
          />
          {team.length > 0 ? (
            <div className="about-values">
              {team.map((member) => (
                <div key={member.id} className="about-value-card">
                  <h3 className="about-value-card__title">{member.name}</h3>
                  <p
                    className="about-value-card__text"
                    style={{ marginBottom: '0.5rem', color: 'var(--color-accent)' }}
                  >
                    {member.role}
                  </p>
                  <p className="about-value-card__text">{member.bio}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="team-placeholder">
              <p>Team information coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want to work with BADKAVS?"
        description="We're always interested in hearing about new projects and ideas."
        buttonText="Get in Touch"
        buttonTo="/contact"
      />
    </>
  );
}
