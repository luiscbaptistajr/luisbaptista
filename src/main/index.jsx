import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Design from '../pages/design';
import Development from '../pages/dev';
import Nasa from '../pages/nasa';
import Fido from '../pages/fido';
import BudgetBuddy from '../pages/bb';
import PrepUp from '../pages/prep/prep';

export const links = () => {
  return (
    <main>
      <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<Design />} />
          <Route path="/development" element={<Development />} />
          <Route path="/nasa" element={<Nasa />} />
          <Route path="/fido" element={<Fido />} />
          <Route path="/bb" element={<BudgetBuddy />} />
          <Route path="/prep" element={<PrepUp />} />
      </Routes>
    </main>
  )
}

export default links;