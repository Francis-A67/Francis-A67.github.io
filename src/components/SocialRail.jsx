import { GitHubIcon, LinkedInIcon, LeetCodeIcon, EmailIcon } from './Icons.jsx';

export default function SocialRail() {
  return (
    <div className="social-rail">
      <a href="https://github.com/Francis-A67" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <GitHubIcon />
      </a>
      <a href="https://www.linkedin.com/in/francis-ametewee-b3137b2b7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <LinkedInIcon />
      </a>
      <a href="https://leetcode.com/u/Francis-A67" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
        <LeetCodeIcon />
      </a>
      <a href="mailto:fametewe@gmail.com" aria-label="Email">
        <EmailIcon />
      </a>
    </div>
  );
}
