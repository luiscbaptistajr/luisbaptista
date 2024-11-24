import { Routes, Route, BrowserRouter, HashRouter, Link } from 'react-router-dom';

/** Components */
import Header from "./components/header";
// import Hero from "./components/hero";

import Home from './pages/home';
import About from './pages/about';
import Design from './pages/design';
import Development from './pages/development';

import Footer from "./components/footer";
// import Parallax from "./sections/parallax";


const App = () => {

  return (
    <>
      {/* <Header /> */}
      <HashRouter>
          <header className="w-full flex items-center">
            <div className="w-full mx-auto flex justify-between items-center">
              <h1 className="relative md:justify-self-center">
                <a 
                href="/" 
                className="logo"
                >
                    <img 
                        src="/images/logo.svg"
                        // src={`${URI}/images/logo.svg`}
                        width={30} 
                        height={30} 
                        alt="Luis Baptista" 
                    />

                </a>
              </h1>
              <div className="relative md:justify-self-center">
                <nav className="navbar">
                  {/* <Link className='nav-link' to="/home">Home</Link> */}
                  <Link className='nav-link' to="/about">About</Link>
                  <Link className='nav-link' to="/design">design</Link>
                  <Link className='nav-link' to="/development">development</Link>
                </nav>
              </div>
            </div>
            
          </header>
          <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="*" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/design" element={<Design />} />
              <Route path="/development" element={<Development />} />
          </Routes> 
        
      </HashRouter>
      <Footer />
    </>
    
  )
}

export default App;