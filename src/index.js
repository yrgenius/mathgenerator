import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import Header from './components/header/Header';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <Header/>
    <App />
  </div>
);

