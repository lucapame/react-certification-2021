import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
