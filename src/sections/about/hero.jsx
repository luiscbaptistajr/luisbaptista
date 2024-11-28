export const AboutHero = () => {
  return (
    <section className="w-full hero-section">
      <div className="mx-24 my-auto grid grid-cols-1 gap-4 about-intro">
          {/* <p className="special-font">ABOUT</p> */}
          <img className="profile" src="./images/profile.png" alt="" />
          <div className="col-span-5 intro-container">
            <h3 className="section-title-h3">Hello! My name is Luis Baptista</h3>
            <p className="body-text-p1">I have over 10 years experiences as web developer. I specialize in delivering both technical and creative design solutions. I excel in leading complex projects, managing cross-functional teams, and aligning technical roadmaps with business goals.</p>
            <p className="body-text-p1">I possess strong frontend and backend development skills with a solid understanding of AWS, MS Azure,  HTML, CSS, JavaScript frameworks, coupled with leadership abilities. Beyond being a developer, I am an enthusiastic and motivated product designer with a strong passion for UX and UI. I have experience in creating complex user experience (UX) flows, conducting usability testing, and designing user interface (UI) components for both web and mobile applications.</p>
            <p className="body-text-p1">I am open to Product Management roles, as my tech background, combined with a strong understanding of the entire development process, from UX/UI design to testing, development, integration, and deployment which aligns my core strengths in delivering comprehensive solutions.</p>
          </div>
          <div className="col-start-2 col-span-5 btn-container">
            <h3 className="section-title-h3">My Resume</h3>
            <div className="list-blocks">
              <a href="./files/LuisBaptista_UIUX.pdf" download>Product UI/UX Designer</a>
              <a href="./files/LuisBaptista_ProdMngr.pdf" download>Product Manager</a>
            </div>
          </div>
      </div>
    </section>
  )
}

export default AboutHero;
