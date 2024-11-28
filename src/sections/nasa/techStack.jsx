export const TechStack = () => {
    return (
      <section className="w-full">
        <div className="mx-24 my-auto tech-section">
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
                  <img src="./images/adobe-premiere.svg" alt="" />
                  <img src="./images/adobe-photoshop.svg" alt="" />
                  <img src="./images/adobe-indesign.svg" alt="" />
                  <img src="./images/adobe-illustrator.svg" alt="" />
                  <img src="./images/adobe-after-effect.svg" alt="" />
                  <div>
                    <h4>Adobe Products</h4>
                    <p>Design Tool</p>
                  </div>
                </div>

                
            </div>
        </div>
      </section>
    )
  }
  
  export default TechStack;