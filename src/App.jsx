import Nav from './components/Nav.jsx';
import SocialRail from './components/SocialRail.jsx';
import EmailRail from './components/EmailRail.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import Credentials from './sections/Credentials.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <SocialRail />
      <EmailRail />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
