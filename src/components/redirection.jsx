import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Design from '../pages/design';
import Development from '../pages/development';
import Nasa from '../pages/nasa';

export const Redirection = () => {
  return (
    <>
      <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<Design />} />
          <Route path="/development" element={<Development />} />
          <Route path="/nasa" element={<Nasa />} />
      </Routes>
    </>
  )
}

export default Redirection;
