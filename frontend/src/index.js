import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommonRoutes from './Routers/Common_routes';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <CommonRoutes />
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);


