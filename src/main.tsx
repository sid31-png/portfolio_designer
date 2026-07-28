import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Self-hosted fonts (bundled — no external request).
import '@fontsource-variable/inter';
import '@fontsource/ibm-plex-sans-arabic/400.css';
import '@fontsource/ibm-plex-sans-arabic/500.css';
import '@fontsource/ibm-plex-sans-arabic/700.css';

import './styles/index.css';
import App from './App';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { MotionProvider } from '@/theme/MotionProvider';
import { I18nProvider } from '@/i18n';

// Vite injects the project-page base ('/portfolio_designer/'); strip the
// trailing slash for React Router's basename.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <MotionProvider>
          <BrowserRouter basename={basename}>
            <App />
          </BrowserRouter>
        </MotionProvider>
      </I18nProvider>
    </ThemeProvider>
  </StrictMode>,
);
