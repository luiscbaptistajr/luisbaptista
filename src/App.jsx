import { Routes, Route, HashRouter, Link } from 'react-router-dom';

/** Components */
import Header from "./components/header";
// import Hero from "./components/hero";

import Home from './pages/home';
import About from './pages/about';
import Design from './pages/design';
import Development from './pages/development';

import Footer from "./components/footer";


const App = () => {

  return (
    <>
      {/* <Header /> */}
      <HashRouter>
          <header className="w-full flex items-center">
            <div className="w-full mx-24 my-auto flex justify-between items-center">
              <h1 className="relative md:justify-self-center">
                <a 
                href="/luisbaptista" 
                className="logo"
                >
                    <img 
                        src="./images/logo-header.svg"
                        width={30} 
                        height={30} 
                        alt="Luis Baptista Logo" 
                    />

                </a>
              </h1>
              <div className="relative md:justify-self-center">
                <nav className="navbar">
                  {/* <Link className='nav-link' to="/home">Home</Link> */}
                  <Link className='nav-link' to="/about">About</Link>
                  <Link className='nav-link' to="/design">Design</Link>
                  <Link className='nav-link' to="/development">Development</Link>
                </nav>
              </div>
            </div>
          </header>
          <main>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="*" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/design" element={<Design />} />
                <Route path="/development" element={<Development />} />
            </Routes> 
          </main>
      </HashRouter>
      <Footer />
    </>
    
  )
}

export default App;