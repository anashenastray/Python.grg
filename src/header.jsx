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
          <svg
            className="python-logo-icon"
            viewBox="0 0 110 110"
            width="34"
            height="34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M54.5 5C27.5 5 28.5 16.5 28.5 16.5L28.6 28.5H55V32H18.2C6.5 32 5 44 5 44S4.2 57.5 17.5 57.5H24.8V47.2C24.8 38 33 38 33 38H55.2C64.5 38 64.5 29.5 64.5 29.5V13.8C64.5 13.8 65.5 5 54.5 5ZM42.8 12.8C45.3 12.8 47.3 14.8 47.3 17.3C47.3 19.8 45.3 21.8 42.8 21.8C40.3 21.8 38.3 19.8 38.3 17.3C38.3 14.8 40.3 12.8 42.8 12.8Z"
              fill="#4584b6"
            />
            <path
              d="M55.5 105C82.5 105 81.5 93.5 81.5 93.5L81.4 81.5H55V78H91.8C103.5 78 105 66 105 66S105.8 52.5 92.5 52.5H85.2V62.8C85.2 72 77 72 77 72H54.8C45.5 72 45.5 80.5 45.5 80.5V96.2C45.5 96.2 44.5 105 55.5 105ZM67.2 97.2C64.7 97.2 62.7 95.2 62.7 92.7C62.7 90.2 64.7 88.2 67.2 88.2C69.7 88.2 71.7 90.2 71.7 92.7C71.7 95.2 69.7 97.2 67.2 97.2Z"
              fill="#ffd43b"
            />
          </svg>
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
          <a
            href="https://psfmember.org/civicrm/contribute/transact/?reset=1&id=2"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn-donate"
            onClick={handleLinkClick}
          >
            Donate
          </a>
        </nav>
      </div>
    </header>
  );
}
