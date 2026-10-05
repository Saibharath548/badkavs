import {
  Lightbulb,
  PenTool,
  Code,
  Palette,
  Wrench,
  Package,
  Users,
  Gamepad2,
  Puzzle,
  Layers,
  Zap,
  Target,
} from 'lucide-react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ServiceGrid from '@/components/ServiceGrid';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import { getFeaturedServices } from '@/data/services';

export default function Home() {
  const featuredServices = getFeaturedServices();

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Services Preview */}
      <section className="section" aria-label="Featured services">
        <div className="container">
          <SectionHeading
            label="Services"
            title="What We Offer"
            description="From programming and art to design and technical implementation — explore our core services."
          />
          <ServiceGrid services={featuredServices} />
        </div>
      </section>

      {/* What We Do — Workflow */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }} aria-label="Our workflow">
        <div className="container">
          <SectionHeading
            label="Workflow"
            title="From Idea to Implementation"
            description="We cover the full creative pipeline — turning raw concepts into polished, game-ready content."
          />
          <div className="workflow-grid">
            {[
              { icon: <Lightbulb size={22} />, label: 'Idea' },
              { icon: <PenTool size={22} />, label: 'Design' },
              { icon: <Code size={22} />, label: 'Development' },
              { icon: <Palette size={22} />, label: 'Art' },
              { icon: <Wrench size={22} />, label: 'Technical' },
              { icon: <Package size={22} />, label: 'Delivery' },
            ].map((step) => (
              <div key={step.label} className="workflow-step">
                <div className="workflow-step__icon" aria-hidden="true">
                  {step.icon}
                </div>
                <div className="workflow-step__label">{step.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BADKAVS */}
      <section className="section" aria-label="Why BADKAVS">
        <div className="container">
          <SectionHeading
            label="Why Us"
            title="Why BADKAVS"
            description="A multidisciplinary team built for game development and creative production."
          />
          <div className="why-grid">
            {[
              {
                icon: <Users size={24} />,
                title: 'Multi-Disciplinary',
                text: 'Programming, art, design, and technical art under one roof — cohesive results across every discipline.',
              },
              {
                icon: <Gamepad2 size={24} />,
                title: 'Game-Focused',
                text: 'Everything we do is built for games. Our services are designed around game development workflows.',
              },
              {
                icon: <Puzzle size={24} />,
                title: 'Modular Services',
                text: 'Pick the services you need. From a single asset to full production support — scale up or down.',
              },
              {
                icon: <Layers size={24} />,
                title: 'Technical + Artistic',
                text: 'We bridge the gap between art and engineering, ensuring assets look great and perform smoothly.',
              },
              {
                icon: <Zap size={24} />,
                title: 'Flexible & Adaptive',
                text: 'We adapt to your project needs, timeline, and workflow — working as an extension of your team.',
              },
              {
                icon: <Target size={24} />,
                title: 'Idea to Implementation',
                text: 'From a raw concept to structured design to final delivery — we help you every step of the way.',
              },
            ].map((item) => (
              <div key={item.title} className="why-card">
                <div className="why-card__icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }} aria-label="Our process">
        <div className="container">
          <SectionHeading
            label="Process"
            title="How We Work"
            description="A structured, collaborative process from start to finish."
          />
          <ProcessSection />
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Have a game or creative idea in mind?"
        description="Let's build it. Get in touch with BADKAVS and bring your vision to life."
        buttonText="Get in Touch"
        buttonTo="/contact"
      />
    </>
  );
}
