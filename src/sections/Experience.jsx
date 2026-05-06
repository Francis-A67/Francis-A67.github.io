import useFadeIn from '../hooks/useFadeIn.js';

const jobs = [
  {
    title: 'Founder & Lead Software Developer',
    org: 'HIT Technologies',
    date: 'Mar 2026 - Present',
    description: 'Founded an independent software startup. Architected end-to-end backend with data persistence, real-time state, and exploit mitigation. Directed a 3-person development team on an Agile cadence. Shipped Slap and Dash to 4,600+ play sessions and 500+ community members.',
  },
  {
    title: 'Cybersecurity Accelerator Participant',
    org: 'The Washington Center (DoD)',
    date: 'Mar 2026',
    description: 'Selected for a 4-day federal accelerator. Sessions covered AI in government programs, national security software pipelines, and federal hiring tracks for technical roles.',
  },
  {
    title: 'Cybersecurity & Networking Academy',
    org: 'Applications Research Laboratory',
    date: 'May 2024',
    description: 'Hands-on training on Cisco routers and switches, TCP/IP stack internals, DNS, and Windows and Linux hardening practices used in DoD environments.',
  },
  {
    title: 'Crew Leader',
    org: "Dunkin'",
    date: '2023 - 2024',
    description: 'Ran shift management and a 4-person team through high-volume rushes. First job that taught me how to make decisions under time pressure with incomplete information.',
  },
];

export default function Experience() {
  const ref = useFadeIn();

  return (
    <section id="experience" className="fade-in" ref={ref}>
      <div className="container">
        <div className="section-header"><h2>experience</h2></div>
        <div className="experience-grid">
          {jobs.map((job) => (
            <div key={job.org} className="exp-card">
              <div className="exp-header">
                <h3>
                  {job.title} <span className="exp-org">@ {job.org}</span>
                </h3>
                <span className="exp-date">{job.date}</span>
              </div>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
