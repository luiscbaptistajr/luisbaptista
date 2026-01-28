import Hero from "./hero";
import Work from "./work";
import TechStack from "./techStack";
import Wireframes from "./wireframes";
import Parallax from './parallax';

import './bb.css';

export const Budgetbuddy = () => {
    return (
        <>
            <Hero />
            <Work />
            <TechStack />
            {/* <Wireframes /> */}
            <Parallax />
        </>
    )
  }
  
export default Budgetbuddy;
