import useFadeIn from '../hooks/useFadeIn.js';

export default function Contact() {
  const ref = useFadeIn();

  return (
    <section id="contact" className="contact fade-in" ref={ref}>
      <div className="container">
        <div className="contact-label">// 06. let&apos;s_talk</div>
        <h2>Get in touch.</h2>
        <p>
          I&apos;m looking for a SWE internship. Happy to walk through TerpNav&apos;s query layer
          or the resume-tailor architecture on a call. The fastest way to reach me is email.
        </p>
        <div className="contact-grid">
          <a href="mailto:fametewe@gmail.com" className="btn btn-primary">email me →</a>
          <a href="https://www.linkedin.com/in/francis-ametewee-b3137b2b7" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">linkedin →</a>
        </div>
      </div>
    </section>
  );
}
