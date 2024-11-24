import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';

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
      <Header />
      <main>
        {/* <Home />
        <About />
        <Design />
        <Development /> */}
        <HashRouter>
          <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="*" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/design" element={<Design />} />
              <Route path="/development" element={<Development />} />
          </Routes> 
        </HashRouter>  
      </main>
      <Footer />
    </>
    
  )
}

export default App;