import { Mail, Instagram, Linkedin } from 'lucide-react';
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
            BADKAVS or connect with us online.
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="contact-grid">
            <ContactCard
              icon={<Mail size={28} />}
              title="Email"
              value="Send us a message"
              href={`mailto:${siteConfig.contact.email}`}
              ariaLabel="Email BADKAVS"
            />
            <ContactCard
              icon={<Instagram size={28} />}
              title="Instagram"
              value="Follow us on Instagram"
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="BADKAVS on Instagram"
            />
            <ContactCard
              icon={<Linkedin size={28} />}
              title="LinkedIn"
              value="Connect on LinkedIn"
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="BADKAVS on LinkedIn"
            />
          </div>
        </div>
      </section>
    </>
  );
}
