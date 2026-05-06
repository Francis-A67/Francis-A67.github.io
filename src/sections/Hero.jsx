import useFadeIn from '../hooks/useFadeIn.js';

export default function Hero() {
  const ref = useFadeIn();

  return (
    <section className="hero fade-in" id="top" ref={ref}>
      <div className="container">
        <div className="hero-greeting">whoami<span className="blink" /></div>
        <h1>Francis Ametewee.</h1>
        <h2>I build full-stack systems end to end.</h2>
        <p className="hero-bio">
          Sophomore at <strong>UMD</strong> studying Information Science with a Computer Science coursework focus.
          I shipped <strong>Slap and Dash</strong> to <code>4,600+ play sessions</code> as the founder of HIT Technologies,
          and I&apos;m building <strong>TerpNav</strong>, a React/Flask/PostgreSQL app with a Claude-powered natural language layer
          over 100+ campus locations. Working through NeetCode 150 in C++ and looking for a SWE internship
          where I can go deep on production systems under senior engineers.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">view_projects.sh →</a>
          <a href="https://github.com/Francis-A67" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">github →</a>
        </div>
      </div>
    </section>
  );
}
