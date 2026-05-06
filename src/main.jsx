import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Design tokens first, then base, then layout, then components, then sections, then responsive overrides
import './styles/variables.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/sections/hero.css';
import './styles/sections/about.css';
import './styles/sections/projects.css';
import './styles/sections/experience.css';
import './styles/sections/skills.css';
import './styles/sections/credentials.css';
import './styles/sections/contact.css';
import './styles/responsive.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
