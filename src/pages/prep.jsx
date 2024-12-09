import Hero from "../sections/prep/hero";
import Work from "../sections/prep/work";
import TechStack from "../sections/prep/techStack";
import Wireframes from "../sections/prep/wireframes";
import Parallax from '../sections/prep/parallax';

import '../sections/prep/styles.css';

export const Prep = () => {
    return (
        <>
            <Hero />
            <Work />
            <TechStack />
            <Wireframes />
            <Parallax />
        </>
    )
  }
  
export default Prep;
