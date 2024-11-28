import { Link } from 'react-router-dom';
export const Hero = () => {
  return (
    <section className="w-full hero-section inner">
      <div className="mx-24 my-auto grid grid-cols-2 gap-4">
        <div>
            <img src="./images/fido/logo.png" alt="" />
            <h2 className="section-title-h2 inner">Ux Design Study</h2>
            <p className="body-text-p1">Fido Solutions Inc. is a Canadian mobile network operator owned by Rogers Communications. Since its acquisition by Rogers in 2004, it has operated as a Mobile virtual network operator (MVNO) using the Rogers Wireless network.</p>
            <p className="body-text-p3 pt-5">
              <Link className="btn-green mr-4" to="/">Prototype</Link>
              <Link className="btn-green" to="/">Website</Link>
            </p>
        </div>
        <div>
          <img src="./images/fido/hero-image.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero;
