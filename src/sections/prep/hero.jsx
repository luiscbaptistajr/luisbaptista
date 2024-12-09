import { Link } from 'react-router-dom';
export const Hero = () => {
  const inlineStyle = {
    backgroundColor: "#FFEAD9",
    color: '#7592F8'
  };
  return (
    <section className="w-full hero-section inner" style={inlineStyle}>
      <div className="template-container">
        <div>
            <img src="./images/pu/logo.png" alt="" />
            <h2 className="section-title-h2 inner" style={inlineStyle}>Capstone Project</h2>
            <p className="body-text-p1" style={inlineStyle}>PrepUp is a mobile app that prepares you for interviews in your field of study. The app offers a wide range of interview questions with analytical feedback, AI-generated questions tailored to users’ preferred job roles, and access to text-based questions through a STAR Master tool for practice on the go. PrepUp empowers job seekers to prepare smarter, faster and better.</p>
            <p className="body-text-p3 pt-5">
              {/* <Link className="btn-green mr-4" to="/">Prototype</Link> */}
              {/* <Link className="btn-green" to="/">Website</Link> */}
            </p>
        </div>
        <div>
          <img src="./images/pu/hero-image.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero;
