import { Link } from 'react-router-dom';
export const Hero = () => {
  const inlineStyle = {
    borderRadius: '0',
    color: '#7592F8'
  };
  return (
    <section className="w-full hero-section inner gallery-bg bg-fido" style={inlineStyle}>
      <div className="template-container">
        <div>
            <img src="./images/fido/logo.png" alt="" />
            <h2 className="section-title-h2 inner">Ux Design Study</h2>
            <p className="body-text-p1">Fido Solutions Inc. is a Canadian mobile network operator owned by Rogers Communications. Since its acquisition by Rogers in 2004, it has operated as a Mobile virtual network operator (MVNO) using the Rogers Wireless network.</p>
            <p className="body-text-p3 pt-5">
              <Link className="btn-green mr-4" target="_blank" to="https://www.figma.com/proto/G33S8zeT8OdcWY4PbwCVNR/FIDO-Wireframe?page-id=96%3A2040&node-id=96-2042&node-type=canvas&viewport=789%2C461%2C0.37&t=5OZSlZqWXT2HxLkm-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=96%3A2042">Prototype</Link>
              {/* <Link className="btn-green" to="/">Website</Link> */}
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
