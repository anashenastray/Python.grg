import React from 'react';
import './E.css';

const items = [
  {
    title: 'Get Started',
    icon: '🚀',
    desc: "Whether you're new to programming or an experienced developer, Python's clean syntax is intuitive and easy to pick up.",
    link: 'Beginner’s Guide',
    url: 'https://www.python.org/about/gettingstarted/',
  },
  {
    title: 'Download',
    icon: '📦',
    desc: 'Official Python source code and one-click installers for Windows, macOS, Linux, and other platforms.',
    link: 'Latest: Python 3.12+',
    url: 'https://www.python.org/downloads/',
  },
  {
    title: 'Documentation',
    icon: '📚',
    desc: 'Standard library references, in-depth tutorials, API references, PEPs, and comprehensive developer guides.',
    link: 'docs.python.org',
    url: 'https://docs.python.org/',
  },
  {
    title: 'Jobs & Community',
    icon: '💼',
    desc: 'Connect with a thriving global community, attend PyCon events, and explore openings on the official job board.',
    link: 'jobs.python.org',
    url: 'https://jobs.python.org/',
  },
];

export default function EventList() {
  return (
    <section className="events-section-wrapper" id="events">
      <div className="events-container">
        <div className="section-title-wrap">
          <h2 className="section-title">Explore the Python Ecosystem</h2>
          <p className="section-description">
            Everything you need to build applications, analyze data, and join our global developer community.
          </p>
        </div>

        <div className="grid">
          {items.map((item, i) => (
            <div key={i} className="card">
              <div className="card-header">
                <span className="card-icon" aria-hidden="true">{item.icon}</span>
                <h3 className="card-title">{item.title}</h3>
              </div>
              <p className="card-desc">{item.desc}</p>
              <a
                href={item.url}
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{item.link}</span>
                <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
