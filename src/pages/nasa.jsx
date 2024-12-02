import Hero from "../sections/nasa/hero";
import Work from "../sections/nasa/work";
import TechStack from "../sections/nasa/techStack";
import Wireframes from "../sections/nasa/wireframes";
import Parallax from '../sections/nasa/parallax';

import '../sections/nasa/styles.css';

export const Nasa = () => {
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
  
export default Nasa;
