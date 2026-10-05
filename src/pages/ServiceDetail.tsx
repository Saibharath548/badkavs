import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  PackageCheck,
} from 'lucide-react';
import { getServiceBySlug } from '@/data/services';
import { getCategoryById } from '@/data/categories';
import ServiceStatusBadge from '@/components/ServiceStatusBadge';
import ServiceIcon from '@/components/ServiceIcon';
import CTASection from '@/components/CTASection';
import NotFound from './NotFound';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <NotFound />;

  const category = getCategoryById(service.category);
  const isComingSoon = service.status === 'coming-soon';
  const isUnavailable = service.status === 'unavailable';

  return (
    <>
      <div className="service-detail container">
        {/* Back link */}
        <Link to="/services" className="service-detail__back">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        {/* Header */}
        <div className="service-detail__header">
          <div className="service-detail__meta">
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-bg-elevated)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-accent)',
              }}
              aria-hidden="true"
            >
              <ServiceIcon name={service.icon} />
            </div>
            {category && (
              <span className="service-detail__category">{category.name}</span>
            )}
            <ServiceStatusBadge status={service.status} />
          </div>

          <h1 className="service-detail__title">{service.name}</h1>
          <p className="service-detail__description">{service.description}</p>
        </div>

        {/* Coming soon banner */}
        {isComingSoon && (
          <div className="coming-soon-banner">
            <h2 className="coming-soon-banner__title">Coming Soon</h2>
            <p className="coming-soon-banner__text">
              This service is planned but not currently available. BADKAVS is
              working on bringing this capability to our lineup. Stay tuned for
              updates.
            </p>
          </div>
        )}

        {/* Unavailable banner */}
        {isUnavailable && (
          <div
            className="coming-soon-banner"
            style={{
              background: 'var(--color-unavailable-bg)',
              borderColor: 'rgba(248, 113, 113, 0.2)',
            }}
          >
            <h2
              className="coming-soon-banner__title"
              style={{ color: 'var(--color-unavailable)' }}
            >
              Currently Unavailable
            </h2>
            <p className="coming-soon-banner__text">
              This service is not currently available. Please check back later or
              contact BADKAVS for more information.
            </p>
          </div>
        )}

        {/* Detail sections */}
        {!isComingSoon && !isUnavailable && (
          <div className="service-detail__sections">
            {/* Capabilities */}
            {service.capabilities.length > 0 && (
              <div className="service-detail__section">
                <h2 className="service-detail__section-title">
                  <CheckCircle2 size={18} /> Capabilities
                </h2>
                <div className="service-detail__list">
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="service-detail__list-item">
                      <span
                        className="service-detail__list-bullet"
                        aria-hidden="true"
                      />
                      {cap}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            {service.technologies && service.technologies.length > 0 && (
              <div className="service-detail__section">
                <h2 className="service-detail__section-title">
                  <Cpu size={18} /> Technologies
                </h2>
                <div className="service-detail__tags">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="service-detail__tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Deliverables */}
            {service.deliverables && service.deliverables.length > 0 && (
              <div className="service-detail__section">
                <h2 className="service-detail__section-title">
                  <PackageCheck size={18} /> Typical Deliverables
                </h2>
                <div className="service-detail__list">
                  {service.deliverables.map((del) => (
                    <div key={del} className="service-detail__list-item">
                      <span
                        className="service-detail__list-bullet"
                        aria-hidden="true"
                      />
                      {del}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* CTA */}
      {service.status === 'available' ? (
        <CTASection
          title="Interested in this service?"
          description={`Let's discuss how ${service.name} can fit into your project.`}
          buttonText="Get in Touch"
          buttonTo="/contact"
        />
      ) : (
        <CTASection
          title="Have questions about our services?"
          description="Reach out to BADKAVS and let's talk about your project."
          buttonText="Get in Touch"
          buttonTo="/contact"
        />
      )}
    </>
  );
}
