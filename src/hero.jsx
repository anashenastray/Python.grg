import React, { useState } from 'react';
import './hero.css';

export default function Hero({ title }) {
  const [copied, setCopied] = useState(false);

  const displayTitle =
    title ||
    'Python is powerful... and fast; plays well with others; runs everywhere; is friendly & easy to learn; is Open.';

  const codeSnippet = `# Python 3: Fibonacci series up to n
def fib(n):
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a + b
    print()

fib(1000)
# Output:
# 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987`;


  return (
    <section className="hero-container" id="about">
      <div className="hero-wrapper">
        <div className="hero-text">
          <h1 className="hero-headline">{displayTitle}</h1>
          <p className="hero-subtext">
            Python is a versatile programming language.
          </p>
          <div className="hero-actions">
            <a href="https://www.python.org/downloads/" className="btn-hero-primary" id="downloads">
              Download Python 3.12
            </a>
            <a href="https://www.python.org/doc/" className="btn-hero-secondary" id="docs">
              Documentation
            </a>
          </div>
        </div>

        <div className="code-panel">
          <div className="code-header">
            <div className="window-dots" aria-hidden="true">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="code-title">Python 3: Fibonacci series</span>
          </div>
          <pre className="code-pre">
            <code className="code-content">{codeSnippet}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
