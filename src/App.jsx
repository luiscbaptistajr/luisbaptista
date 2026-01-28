/** REACT External Library */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HashRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


/** Components */
import Header from "./main/header";
import Main from "./main";
import Footer from "./main/footer";

/** CSS */
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <HashRouter> */}
      <BrowserRouter>
          <Header />
          <Main />
          <Footer />
      </BrowserRouter>
      {/* </HashRouter> */}
  </StrictMode>,
)


