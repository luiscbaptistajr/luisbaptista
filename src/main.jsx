/** Node Modules */
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

/** Components */
// import App from './App.jsx'



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// main.js
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

/** CSS link */
import './index.css'

// const router = createHashRouter([
//    {
//      path: "/*",
//      element: <App />,
//    }
//  ]);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <HashRouter>
         <App />
      </HashRouter>
   </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//    <React.StrictMode>
//       <BrowserRouter>
//          <App />
//       </BrowserRouter>
//    </React.StrictMode>
// );

// ReactDOM.createRoot(document.getElementById('roots')).render(
//    <React.StrictMode>
//      <BrowserRouter router={router} />
//    </React.StrictMode>
//  );
