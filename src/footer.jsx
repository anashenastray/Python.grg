import React from 'react';
import './footer.css';

export default function Footer() {
  const sections = [
    {
      title: 'About',
      links: [
        { label: 'Applications', href: 'https://www.python.org/about/apps/' },
        { label: 'Quotes & Success Stories', href: 'https://www.python.org/about/quotes/' },
        { label: 'Getting Started', href: 'https://www.python.org/about/gettingstarted/' },
        { label: 'Python News', href: 'https://blog.python.org/' },
      ],
    },
    {
      title: 'Documentation',
      links: [
        { label: 'Python 3.x Docs', href: 'https://docs.python.org/3/' },
        { label: 'Beginner’s Guide', href: 'https://wiki.python.org/moin/BeginnersGuide' },
        { label: 'PEP Index', href: 'https://peps.python.org/' },
        { label: 'Developer’s Guide', href: 'https://devguide.python.org/' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Diversity Statement', href: 'https://www.python.org/community/diversity/' },
        { label: 'Mailing Lists & Forums', href: 'https://www.python.org/community/lists/' },
        { label: 'Python Conferences (PyCon)', href: 'https://pycon.org/' },
        { label: 'Code of Conduct', href: 'https://www.python.org/psf/conduct/' },
      ],
    },
    {
      title: 'Foundation',
      links: [
        { label: 'PSF Overview', href: 'https://www.python.org/psf/' },
        { label: 'Make a Donation', href: 'https://psfmember.org/civicrm/contribute/transact/?reset=1&id=2' },
        { label: 'Sponsorship', href: 'https://www.python.org/psf/sponsorship/' },
        { label: 'Contact Us', href: 'https://www.python.org/psf/contact/' },
      ],
    },
  ];

  return (
    <footer className="footer" id="community">
      <div className="footer-container">
        <div className="footer-grid">
          {sections.map((sec) => (
            <div key={sec.title} className="footer-section">
              <h3 className="footer-heading">{sec.title}</h3>
              <ul className="footer-links-list">
                {sec.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © Python Software Foundation. All rights reserved.
          </p>
          <p className="footer-trademark">
            Python and the Python logo are trademarks or registered trademarks of the Python Software Foundation.
          </p>
        </div>
      </div>
    </footer>
  );
}
