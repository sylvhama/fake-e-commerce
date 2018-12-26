import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './index.css';

if (location.hostname !== 'localhost' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
