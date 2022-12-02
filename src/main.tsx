import '@/styles/tailwind.css';
import '@/styles/scrollbar.css';
import '@/i18n';
import '@/utils/string.extension';

import React from 'react';
import ReactDOM from 'react-dom';

import App from '@/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
