import { Mail } from 'lucide-react';
import ContactCard from '@/components/ContactCard';
import { siteConfig } from '@/config/site';

export default function Contact() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Let&rsquo;s Work Together</h1>
          <p className="page-header__description">
            Have a game, idea, or creative project in mind? Get in touch with
            {siteConfig.name} — we&rsquo;d love to hear from you.
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="contact-grid">
            <ContactCard
              icon={<Mail size={28} />}
              title="Email"
              value={siteConfig.contact.email}
              href={`mailto:${siteConfig.contact.email}`}
              ariaLabel={`Email ${siteConfig.name}`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
