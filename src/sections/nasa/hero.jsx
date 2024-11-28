import { Link } from 'react-router-dom';
export const Hero = () => {
  return (
    <section className="w-full hero-section">
      <div className="mx-24 my-auto grid grid-cols-6 gap-4">
        <div>
            <img src="https://placehold.co/796x262" alt="" />
            <h2>UI APP Design Study</h2>
            <p>Redesigning the NASA app aims to update its interface to better meet user needs, focusing on improving how users navigate and interact with graphics and the user interface. The goal is to create a more intuitive and engaging experience for accessing NASA’s scientific and educational resources.</p>
            <p>
              <Link className="btn-green" to="/">Prototype</Link>
              <Link className="btn-green" to="/">Website</Link>
            </p>
        </div>
        <div>
          <img src="https://placehold.co/512x800" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero;
