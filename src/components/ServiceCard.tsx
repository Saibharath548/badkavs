import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/data/services';
import { getCategoryById } from '@/data/categories';
import ServiceStatusBadge from './ServiceStatusBadge';
import ServiceIcon from './ServiceIcon';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const category = getCategoryById(service.category);

  const cardModifier =
    service.status === 'coming-soon'
      ? 'card--coming-soon'
      : service.status === 'unavailable'
        ? 'card--unavailable'
        : '';

  return (
    <div className={`card ${cardModifier}`}>
      <div className="service-card">
        <div className="service-card__icon" aria-hidden="true">
          <ServiceIcon name={service.icon} />
        </div>

        <div className="service-card__header">
          <h3 className="service-card__name">{service.name}</h3>
          <ServiceStatusBadge status={service.status} />
        </div>

        {category && (
          <div className="service-card__category">{category.name}</div>
        )}

        <p className="service-card__description">{service.shortDescription}</p>

        <div className="service-card__footer">
          <Link
            to={`/services/${service.slug}`}
            className="service-card__link"
            aria-label={`Learn more about ${service.name}`}
          >
            Learn More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
