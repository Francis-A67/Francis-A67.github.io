import { useState } from 'react';
import useFadeIn from '../hooks/useFadeIn.js';
import { PersonIcon } from '../components/Icons.jsx';

function AboutPhoto() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="about-photo">
      {(!loaded || error) && (
        <div className="photo-placeholder">
          <PersonIcon />
          <code>public/images/headshot.jpg</code>
        </div>
      )}
      <img
        src="images/headshot.jpg"
        alt="Francis Ametewee"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover',
          display: loaded && !error ? 'block' : 'none',
        }}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
}

export default function About() {
  const ref = useFadeIn();

  return (
    <section id="about" className="fade-in" ref={ref}>
      <div className="container">
        <div className="section-header"><h2>about</h2></div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I&apos;m a student at the University of Maryland on a self-directed software engineering track.
              My major is Information Science, but my coursework and projects center on building production systems:
              databases, APIs, distributed state, real-time multiplayer.
            </p>
            <p>
              I founded <strong>HIT Technologies</strong> in 2026 and shipped <strong>Slap and Dash</strong>, a Roblox multiplayer platform
              that organically grew to 4,600+ sessions and 400+ community members. I directed a 3-person dev team
              through architecture and release cycles. The College of Information Studies featured the project.
            </p>
            <p>
              Outside that, I&apos;m building <code>TerpNav</code> solo. It&apos;s a React 19 frontend on a REST API
              with PostgreSQL and a Django backend. I maintain{' '}
              <code>resume-tailor</code>, an open-source Claude automation skill licensed MIT.
            </p>
            <p>
              I want a full-time SWE internship at a team that ships fast and lets me go deep on backend systems
              under senior engineers.
            </p>
            <div className="about-stack-label">// current stack</div>
            <ul className="about-stack">
              <li>Python · Flask</li>
              <li>React 19 · TypeScript</li>
              <li>PostgreSQL · SQL</li>
              <li>Anthropic Claude API</li>
              <li>GitHub Actions CI/CD</li>
              <li>Lua · Roblox Studio</li>
              <li>C++ · Java</li>
              <li>Linux · Bash</li>
              <li>Django · REST APIs</li>
              <li>JWT · GitHub Actions</li>
            </ul>
          </div>
          <AboutPhoto />
        </div>
      </div>
    </section>
  );
}
