import { Link } from 'react-router-dom';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          {/* Brand */}
          <div>
            <div className="footer__brand-name">{siteConfig.name}</div>
            <p className="footer__brand-tagline">
              Game Development &amp; Creative Services
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="footer__heading">Pages</h3>
            {siteConfig.navigation.map((item) => (
              <Link key={item.path} to={item.path} className="footer__link">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Connect */}
          <div>
            <h3 className="footer__heading">Connect</h3>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="footer__link"
              aria-label="Email BADKAVS"
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} /> Email
              </span>
            </a>
            <a
              href={siteConfig.contact.instagram}
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BADKAVS on Instagram"
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Instagram size={14} /> Instagram
              </span>
            </a>
            <a
              href={siteConfig.contact.linkedin}
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BADKAVS on LinkedIn"
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Linkedin size={14} /> LinkedIn
              </span>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
