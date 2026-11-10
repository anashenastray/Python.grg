import React, { useState } from 'react';
import './header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Downloads', href: '#downloads' },
    { label: 'Documentation', href: '#docs' },
    { label: 'Community', href: '#community' },
    { label: 'Events', href: '#events' },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <a href="/" className="logo-brand" aria-label="Python Home">
          <span className="logo-text">
            python<span className="logo-dot">™</span>
          </span>
        </a>

        <button
          className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleLinkClick}
              className="nav-link-item"
            >
              {item.label}
            </a>
          ))}
          
        </nav>
      </div>
    </header>
  );
}
