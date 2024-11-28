import { Link } from 'react-router-dom';
export const Hero = () => {
  return (
    <section className="w-full hero-section inner">
      <div className="mx-24 my-auto grid grid-cols-2 gap-4">
        <div>
            <img src="./images/nasa/logo.png" alt="" />
            <h2 className="section-title-h2 inner">UI APP Design Study</h2>
            <p className="body-text-p1">Redesigning the NASA app aims to update its interface to better meet user needs, focusing on improving how users navigate and interact with graphics and the user interface. The goal is to create a more intuitive and engaging experience for accessing NASA’s scientific and educational resources.</p>
            <p className="body-text-p3 pt-5">
              {/* <Link className="btn-green mr-4" to="/">Prototype</Link> */}
              {/* <Link className="btn-green" to="/">Website</Link> */}
            </p>
        </div>
        <div>
          <img src="./images/nasa/hero-image.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero;
