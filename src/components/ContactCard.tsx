import type { ReactNode } from 'react';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  href: string;
  target?: string;
  rel?: string;
  ariaLabel: string;
}

export default function ContactCard({
  icon,
  title,
  value,
  href,
  target,
  rel,
  ariaLabel,
}: ContactCardProps) {
  return (
    <a
      href={href}
      className="contact-card"
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      <div className="contact-card__icon" aria-hidden="true">
        {icon}
      </div>
      <h3 className="contact-card__title">{title}</h3>
      <span className="contact-card__value">{value}</span>
    </a>
  );
}
