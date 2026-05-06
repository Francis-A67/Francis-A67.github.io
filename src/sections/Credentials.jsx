import useFadeIn from '../hooks/useFadeIn.js';

const credentials = [
  { id: '[01]', title: 'Gold CyberPatriot Distinction', meta: '2024' },
  { id: '[02]', title: 'Keep Me Maryland Scholarship', meta: '$3,000 · 2025' },
  { id: '[03]', title: 'Howard County Executive Award of Recognition', meta: '2023' },
  { id: '[04]', title: 'ARL Cybersecurity Academy Graduate', meta: 'Army Research Laboratory · 2024' },
  { id: '[05]', title: 'DoD Cybersecurity Accelerator', meta: 'The Washington Center · 2026' },
  { id: '[06]', title: 'Semester Academic Honors', meta: 'UMD · Spring 2025' },
];

export default function Credentials() {
  const ref = useFadeIn();

  return (
    <section id="credentials" className="fade-in" ref={ref}>
      <div className="container">
        <div className="section-header"><h2>credentials</h2></div>
        <div className="creds-grid">
          {credentials.map((cred) => (
            <div key={cred.id} className="cred">
              <div className="cred-icon">{cred.id}</div>
              <div>
                <div className="cred-title">{cred.title}</div>
                <div className="cred-meta">{cred.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
