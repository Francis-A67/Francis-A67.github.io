import useFadeIn from '../hooks/useFadeIn.js';

const categories = [
  {
    label: '// languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Lua', 'C++', 'Java', 'Bash'],
  },
  {
    label: '// frameworks',
    items: ['React 19', 'Flask', 'Node.js', 'Express', 'Roblox Studio'],
  },
  {
    label: '// infra & data',
    items: ['PostgreSQL', 'Git / GitHub', 'GitHub Actions', 'Linux', 'REST APIs', 'JWT'],
  },
  {
    label: '// AI & tooling',
    items: ['Anthropic Claude API', 'Claude SDK', 'Prompt engineering', 'Claude Code'],
  },
  {
    label: '// cybersecurity',
    items: ['TCP/IP', 'DNS', 'Cisco routing/switching', 'Linux hardening', 'Windows hardening'],
  },
  {
    label: '// algorithms',
    items: ['NeetCode 150 (in progress)', 'C++ focus', 'Data Structures (UMD)'],
  },
];

export default function Skills() {
  const ref = useFadeIn();

  return (
    <section id="skills" className="fade-in" ref={ref}>
      <div className="container">
        <div className="section-header"><h2>stack</h2></div>
        <div className="skills-grid">
          {categories.map((cat) => (
            <div key={cat.label} className="skill-cat">
              <h4>{cat.label}</h4>
              <ul>
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
