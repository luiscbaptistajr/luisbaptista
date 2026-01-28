import Hero from "./hero";
import Work from "./work";
import TechStack from "./techStack";
import Education from "./education";

import './about.css';

export const About = () => {
    return (
        <>
            <Hero />
            <TechStack />
            <Work />
            <Education />
        </>
    )
  }
  
export default About;
