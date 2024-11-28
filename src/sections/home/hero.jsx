import { Link } from 'react-router-dom';

export const HomeHero = () => {
  return (
    <section className="w-full hero-section">
        <div className="mx-24 my-auto">
            <h3 className="title-heading hero-head">
              <span className="first-name">luis</span><span className="last-name">baptista</span>
            </h3>
            <p className="special-font">PORTFOLIO</p>
            <Link className="btn-green" to="/about">About</Link>
        </div>
    </section>
  )
}

export default HomeHero;
