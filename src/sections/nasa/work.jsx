export const Work = () => {
    return (
      <section className="w-full">
        <div className="mx-24 my-auto grid grid-cols-2 gap-4 work-section">
            <h2 className="col-span-2 section-title-h2">UI Design Study</h2>
            <div>
                <img src="./images/nasa/colors.png" alt="" />
            </div>
            <div className="work-container">
                <div>
                  {/* <p className="body-text-p2"><small>Color Palette</small></p> */}
                  <h2 className="section-title-h2">Color Usage</h2>
                  <p className="body-text-p1">Together, these colors create a balanced yet dynamic palette that communicates trust and professionalism (through blue tones) and boldness or passion (through red). This combination reflects qualities often associated with space exploration: intelligence, reliability, and the adventurous spirit of discovery.</p>
                </div>
            </div>

            <div className="m-auto">
                <img src="./images/nasa/icon001.png" alt="" />
                <img src="./images/nasa/icon002.png" alt="" />
            </div>
            
            <div className="work-container">
                <div>
                  {/* <p className="body-text-p2"><small>Color Palette</small></p> */}
                  <h2 className="section-title-h2">Iconography</h2>
                  <p className="body-text-p1">These icons would look striking in the selected colors, with navy and dark blue for backgrounds or bases and the red for highlights, giving them a sharp, cohesive look that reinforces the space exploration theme.</p>
                </div>
            </div>

            
            
            
          
        </div>
      </section>
    )
  }
  
  export default Work;
  