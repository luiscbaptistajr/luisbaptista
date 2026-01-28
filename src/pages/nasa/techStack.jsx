export const TechStack = () => {
    return (
      <section className="w-full">
        <div className="tech-section">
            <h2 className="section-title-h2">DESIGN STACK</h2>
            <div className="flex flex-row tech-skill-container">
                <div className="skill-container">
                  <img src="./images/figma.svg" alt="" />
                  <div>
                    <h4>Figma</h4>
                    <p>Design Tool</p>
                  </div>
                </div>
                <div className="skill-container">
                  <img src="./images/adobe-photoshop.svg" alt="" />
                  <div>
                    <h4>Adobe Photoshop</h4>
                    <p>Design Tool</p>
                  </div>
                </div>
                
            </div>
        </div>
      </section>
    )
  }
  
  export default TechStack;