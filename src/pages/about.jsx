import Hero from "../sections/about/hero";
import Work from "../sections/about/work";
import TechStack from "../sections/about/techStack";
import Education from "../sections/about/education";

import '../sections/about/about.css';

export const About = () => {
    return (
        <>
            <Hero />
            <Work />
            <TechStack />
            <Education />
        </>
    )
  }
  
export default About;
