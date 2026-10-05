import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import ControllerGlyphs from './ControllerGlyphs';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" aria-label={`${siteConfig.name} — Home`}>
          <ControllerGlyphs size={10} layout="grid" />
          <span>{siteConfig.name}</span>
        </Link>

        {/* Desktop navigation */}
        <div className="navbar__links">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`navbar__link ${isActive(item.path) ? 'navbar__link--active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="navbar__mobile-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`navbar__mobile-menu ${isOpen ? 'navbar__mobile-menu--open' : ''}`}
        role="menu"
      >
        {siteConfig.navigation.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`navbar__mobile-link ${isActive(item.path) ? 'navbar__mobile-link--active' : ''}`}
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
