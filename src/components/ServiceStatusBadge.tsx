import type { ServiceStatus } from '@/data/services';

interface ServiceStatusBadgeProps {
  status: ServiceStatus;
}

const statusConfig: Record<
  ServiceStatus,
  { label: string; className: string }
> = {
  available: {
    label: 'Available',
    className: 'status-badge--available',
  },
  'coming-soon': {
    label: 'Coming Soon',
    className: 'status-badge--coming-soon',
  },
  unavailable: {
    label: 'Currently Unavailable',
    className: 'status-badge--unavailable',
  },
};

export default function ServiceStatusBadge({ status }: ServiceStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span className={`status-badge ${config.className}`} role="status" aria-label={`Service status: ${config.label}`}>
      <span className="status-badge__dot" aria-hidden="true" />
      {config.label}
    </span>
  );
}
