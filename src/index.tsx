import { createRoot } from 'react-dom/client';

import { App } from './app';

createRoot(document.getElementById('root')).render(<App />);

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch((registrationError) => {
      console.error('SW registration failed: ', registrationError);
    });
  });
}
