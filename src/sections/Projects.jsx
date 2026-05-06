import { useState } from 'react';
import useFadeIn from '../hooks/useFadeIn.js';
import { GitHubIcon, ImageIcon, PlayIcon } from '../components/Icons.jsx';

function ProjectImage({ src, text, code, Icon }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="case-image">
      {(!loaded || error) && (
        <div className="photo-placeholder">
          <Icon />
          <div>{text}</div>
          <code>{code}</code>
        </div>
      )}
      <img
        src={src}
        alt={text}
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

export default function Projects() {
  const ref = useFadeIn();

  return (
    <section id="projects" className="fade-in" ref={ref}>
      <div className="container">
        <div className="section-header"><h2>projects</h2></div>

        {/* TerpNav */}
        <div className="case-study">
          <div className="case-meta">
            <span className="case-tag">// case_study_01</span>
            <span className="case-status dev">in development</span>
          </div>
          <h3>TerpNav</h3>
          <p className="case-tagline">
            Natural language campus navigator for UMD. Ask &ldquo;where can I print after 9pm&rdquo; and get an answer
            backed by 100+ structured location records.
          </p>
          <div className="case-stack">
            {['React 19', 'Python', 'Django', 'PostgreSQL', 'REST APIs', 'JWT', 'GitHub Actions'].map(t => (
              <span key={t} className="stack-pill">{t}</span>
            ))}
          </div>
          <div className="case-grid">
            <div className="case-block">
              <h4>// the problem</h4>
              <p>
                UMD has 100+ buildings, labs, dining halls, and printers. The official campus map is static
                and search is keyword-only. Students lose time navigating campus systems that don&apos;t talk to each other.
              </p>
            </div>
            <div className="case-block">
              <h4>// what I built</h4>
              <ul>
                <li><strong>REST APIs</strong> over PostgreSQL with normalized schema for 10+ campus locations</li>
                <li><strong>Sub-200ms cached reads</strong> on hot location lookups</li>
                <li><strong>React 19 frontend</strong> with optimistic UI on query submission</li>
                <li><strong>GitHub Actions CI/CD</strong> running tests on every push</li>
              </ul>
            </div>
          </div>
          <div className="case-metrics">
            <div><div className="metric-num">10+</div><div className="metric-label">locations indexed</div></div>
            <div><div className="metric-num">&lt;150ms</div><div className="metric-label">cached read p95</div></div>
            <div><div className="metric-num">solo</div><div className="metric-label">build, full stack</div></div>
          </div>
          <div className="case-block" style={{ marginBottom: '24px' }}>
            <h4>// what I learned</h4>
            <p>
              Designing an LLM query layer means treating prompts as a versioned API surface. I learned to
              benchmark cache invalidation paths the same way I&apos;d benchmark a SQL index. Next milestone is
              deploying to a live URL with real student traffic.
            </p>
          </div>
          <div className="case-links">
            <a href="https://github.com/Francis-A67" target="_blank" rel="noopener noreferrer" className="case-link">
              <GitHubIcon /> repo
            </a>
          </div>
          <ProjectImage src="images/terpnav.jpeg" text="terpnav screenshot goes here" code="public/images/terpnav-1.png" Icon={ImageIcon} />
        </div>

        {/* Slap and Dash */}
        <div className="case-study">
          <div className="case-meta">
            <span className="case-tag">// case_study_02</span>
            <span className="case-status live">live</span>
          </div>
          <h3>Slap and Dash</h3>
          <p className="case-tagline">
            Live multiplayer Roblox platform built at HIT Technologies. Architected the backend, directed
            a 3-person dev team, scaled to 4,600+ sessions organically.
          </p>
          <div className="case-stack">
            {['Lua', 'Roblox Studio', 'Server-side state', 'Anti-exploit'].map(t => (
              <span key={t} className="stack-pill">{t}</span>
            ))}
          </div>
          <div className="case-grid">
            <div className="case-block">
              <h4>// the problem</h4>
              <p>
                Building a multiplayer game that survives contact with the public means handling persistence,
                real-time state sync, and exploit attempts on day one. Most student game projects collapse
                past 100 concurrent users.
              </p>
            </div>
            <div className="case-block">
              <h4>// what I built</h4>
              <ul>
                <li><strong>End-to-end backend</strong> covering data persistence, real-time state, and exploit mitigation</li>
                <li><strong>Server-side authority model</strong> so client tampering can&apos;t corrupt match state</li>
                <li><strong>3-person dev team</strong> working an Agile cadence under my direction</li>
                <li><strong>Release pipeline</strong> from local dev to live player-facing builds</li>
              </ul>
            </div>
          </div>
          <div className="case-metrics">
            <div><div className="metric-num">4,600+</div><div className="metric-label">play sessions</div></div>
            <div><div className="metric-num">400+</div><div className="metric-label">community members</div></div>
            <div><div className="metric-num">3</div><div className="metric-label">person dev team led</div></div>
            <div><div className="metric-num">UMD</div><div className="metric-label">iSchool feature</div></div>
          </div>
          <div className="case-block" style={{ marginBottom: '24px' }}>
            <h4>// what I learned</h4>
            <p>
              Server-side authority is the difference between a game and a leaderboard for cheaters. I learned
              to design every networked action so the client only requests, never decides. Founding a company
              around the project taught me that hiring and giving feedback is its own engineering discipline.
            </p>
          </div>
          <div className="case-links">
            <a href="https://github.com/Francis-A67" target="_blank" rel="noopener noreferrer" className="case-link">
              <GitHubIcon /> HIT Technologies
            </a>
          </div>
          <ProjectImage src="images/slap-and-dash-1.png" text="slap and dash gameplay shot" code="public/images/slap-and-dash-1.png" Icon={PlayIcon} />
        </div>

        {/* resume-tailor */}
        <div className="case-study">
          <div className="case-meta">
            <span className="case-tag">// case_study_03</span>
            <span className="case-status oss">open source · MIT</span>
          </div>
          <h3>resume-tailor</h3>
          <p className="case-tagline">
            Open source Claude automation skill that cuts resume and cover letter tailoring from hours to
            under 10 minutes per application. Field-agnostic, MIT licensed.
          </p>
          <div className="case-stack">
            {['Python', 'Claude SDK', 'Markdown', 'MIT License'].map(t => (
              <span key={t} className="stack-pill">{t}</span>
            ))}
          </div>
          <div className="case-grid">
            <div className="case-block">
              <h4>// the problem</h4>
              <p>
                Generic AI-written cover letters get filtered by recruiters and ATS pipelines. Manual tailoring
                takes hours per application. Most students apply to dozens of roles per cycle.
              </p>
            </div>
            <div className="case-block">
              <h4>// what I built</h4>
              <ul>
                <li><strong>Reusable Claude skill</strong> that loads identity, voice, and anti-AI guardrails</li>
                <li><strong>Job-posting analysis pipeline</strong> matching tech stack to candidate experience</li>
                <li><strong>Voice-locked output</strong> that strips em dashes, banned phrases, AI clichés</li>
                <li><strong>Field-agnostic templates</strong> with a documented tailoring workflow</li>
              </ul>
            </div>
          </div>
          <div className="case-metrics">
            <div><div className="metric-num">&lt;10min</div><div className="metric-label">per tailored app</div></div>
            <div><div className="metric-num">MIT</div><div className="metric-label">open source</div></div>
            <div><div className="metric-num">solo</div><div className="metric-label">build, sole maintainer</div></div>
          </div>
          <div className="case-block" style={{ marginBottom: '24px' }}>
            <h4>// what I learned</h4>
            <p>
              Shipping a skill other people actually use means treating the prompt graph like product code.
              I version the voice profile, lint outputs against a banned-phrase list, and treat regressions
              the same way I&apos;d treat a failing unit test.
            </p>
          </div>
          <div className="case-links">
            <a href="https://github.com/Francis-A67/resume-tailor" target="_blank" rel="noopener noreferrer" className="case-link">
              <GitHubIcon /> github.com/Francis-A67/resume-tailor
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
