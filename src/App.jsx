import { Routes, Route, HashRouter, Link } from 'react-router-dom';

/** Components */
import Header from "./components/header";
// import Hero from "./components/hero";


import Redirection from "./components/redirection";
import Footer from "./components/footer";


const App = () => {

  return (
    <>
      {/* <Header /> */}
      <HashRouter>
          {/* <Header /> */}
          <header className="w-full flex items-center">
            <div className="w-full flex justify-between items-center header-section">
              <h1 className="relative md:justify-self-center">
                <a 
                href="/" 
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
            <Redirection />
          </main>
          <Footer />
      </HashRouter>
    </>
    
  )
}

export default App;