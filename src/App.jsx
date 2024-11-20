import { Routes, Route } from 'react-router-dom';

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
          <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/luisbaptista/" element={<Home />} />
              <Route path="/luisbaptista/home" element={<Home />} />
              <Route path="/luisbaptista/about" element={<About />} />
              <Route path="/luisbaptista/design" element={<Design />} />
              <Route path="/luisbaptista/development" element={<Development />} />
          </Routes>
      </main>
      <Footer />
    </>
    
  )
}

export default App;