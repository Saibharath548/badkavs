import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonTo: string;
  children?: ReactNode;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonTo,
}: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="cta-section__bg" aria-hidden="true" />
      <div className="cta-section__content container">
        <h2 className="cta-section__title">{title}</h2>
        <p className="cta-section__description">{description}</p>
        <Link to={buttonTo} className="btn btn--primary btn--lg">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
