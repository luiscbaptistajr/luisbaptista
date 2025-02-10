import { Link } from 'react-router-dom';

export const HomeHero = () => {
  return (
    <section className="w-full hero-section">
        <div className='home-intro'>
            <h3 className="title-heading hero-head">
              <span className="first-name">Hello,</span>&nbsp;<span className="last-name">my name is</span>&nbsp;<span className="first-name">Luis Baptista!</span>
            </h3>
            <br />
            <p className="card-title-h3">I'm a Full Stack Specialist, with a solid background in Web and Mobile App UX/UI Design and Development. I believe in growth, adaptability, and creating with purpose.</p> 
            <br />
            <p>This space is a reflection of my journey, creativity, and curiosity. It’s where ideas come to life, challenges spark solutions, and every project tells a story.</p> 
            <br />
            <p>Please dive in, explore, and let’s connect! <Link className="first-name" to="/about">More</Link></p>
            {/* <p className="special-font">Luis Baptista</p> */}
            {/* <Link className="btn-green" to="/about">More About Me</Link> */}
        </div>
    </section>
  )
}

export default HomeHero;
