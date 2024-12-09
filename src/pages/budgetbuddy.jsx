import Hero from "../sections/bb/hero";
import Work from "../sections/bb/work";
import TechStack from "../sections/bb/techStack";
import Wireframes from "../sections/bb/wireframes";
import Parallax from '../sections/bb/parallax';

import '../sections/bb/styles.css';

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
