import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import REactGA from "react-ga4";

REactGA.initialize("G-QMX6EHT7TF");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);