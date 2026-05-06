export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <a href="#top" className="logo">FA<span>.dev</span></a>
        <ul className="nav-links">
          <li><a href="#about">about</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#experience">experience</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
        <a href="#contact" className="nav-resume">Request Resume</a>
      </div>
    </nav>
  );
}
