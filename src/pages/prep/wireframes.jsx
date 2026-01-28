export const Wireframes = () => {
    return (
      <section className="w-full pb-24">
        {/* mx-24 my-auto grid grid-cols-2 gap-24  */}
        <div className="work-section">
          {/* <h2 className="col-span-2 section-title-h2">Old Design</h2>

          <div className="block-container wgrid temp-position-2">
            <img src="./images/nasa/current-001.jpg" alt="" />
            <img src="./images/nasa/current-002.jpg" alt="" />
          </div> */}
          
         
          
          <h2 className="col-span-2 section-title-h2">Wireframes</h2>

          <div className="block-container wgrid temp-position-2">
            
            <div className="gallery-bg pu-dark">
              <img src="./images/pu/lowfidelity.png" alt="" />
            </div>
           
            <div className="text-container work-container">
              <h3 className="section-title-h3">Low-Fidelity</h3>
              <p className="body-text-p1">Creating a low-fidelity design for PrepUp involves developing the initial wireframes and user interface (UI) layouts that define the structure and functionality of the app without getting into detailed visuals or style elements. This process allows for rapid prototyping, focusing on user flow and the core features of the app.
              </p>
            </div>
            
          </div>

          <div className="block-container wgrid temp-position-2">
            <div className="text-container work-container">
              <h3 className="section-title-h3">High Fidelity</h3>
              <p className="body-text-p1">This stage will involve adding the visual styling, color palette, typography (such as Maven Pro and Muli), and final UI elements, but the low-fidelity wireframes provide the foundational layout and structure that guides the detailed design work.</p>
            </div>
            <div className="gallery-bg pu-dark">
              <img src="./images/pu/highfidelity.png" alt="" />
            </div>
          </div>

          <div className="block-container ngrid">
              <div className="work-container">
                  <div>
                    {/* <p className="body-text-p2"><small>Color Palette</small></p> */}
                    <h3 className="section-title-h3">Visual Design</h3>
                    <p className="body-text-p1">By keeping the designs simple and focused on functionality, We was able to quickly iterate on ideas and ensure that the app's interface would be intuitive and user-friendly before diving into detailed visual design.</p>
                  </div>
              </div>
            </div>
          

        </div>
      </section>
    )
  }
  
  export default Wireframes;
  