import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './components/font/Raleway-Regular.ttf';
import './components/font/Raleway-Medium.ttf';
import './components/font/Raleway-SemiBold.ttf';
import './components/font/Raleway-Bold.ttf';
import './components/font/Raleway-ExtraBold.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
