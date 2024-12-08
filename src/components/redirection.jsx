import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Design from '../pages/design';
import Development from '../pages/development';
import Nasa from '../pages/nasa';
import Fido from '../pages/fido';
import BudgetBuddy from '../pages/budgetbuddy';
import PrepUp from '../pages/prep';

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
          <Route path="/fido" element={<Fido />} />
          <Route path="/bb" element={<BudgetBuddy />} />
          <Route path="/prep" element={<PrepUp />} />
      </Routes>
    </>
  )
}

export default Redirection;
