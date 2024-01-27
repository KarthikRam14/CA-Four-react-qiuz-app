import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <div>
    <App />
    <div className="blackAndWhite">
      <div className="white">.</div>
    </div>
  </div>,
  document.getElementById('root')
);