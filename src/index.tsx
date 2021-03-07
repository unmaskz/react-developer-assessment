import React from 'react';
import ReactDOM from 'react-dom';
import 'react-flexbox-grid/dist/react-flexbox-grid.js';

/**
 * This file can be ignored, please work in ./components/App.jsx
 */

// Include mock API.
import 'mock';

// Include styles.
import 'styles/index.scss';


// Include application component.
import App from 'components/app/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
