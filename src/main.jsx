import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hotjar from '@hotjar/browser';

const siteId = 5029209;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
