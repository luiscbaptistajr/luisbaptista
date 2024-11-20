/** Node Modules */
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

/** Components */
// import App from './App.jsx'

/** CSS link */
import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { createHashRouter, HashRouter } from 'react-router-dom';
import App from './App';
 
const router = createHashRouter([
   {
     path: "/*",
     element: <App />,
   }
 ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <HashRouter router={router} />
   </React.StrictMode>
);
