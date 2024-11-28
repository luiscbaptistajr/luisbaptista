export const Work = () => {
    return (
      <section className="w-full">
        <div className="mx-24 my-auto work-section">
            <h2 className="col-span-2 section-title-h2">UI Design Study</h2>

            <div className="grid grid-cols-2 gap-4 work-section">
              <div>
                  <img src="./images/nasa/colors.png" alt="" />
              </div>
              <div className="work-container">
                  <div>
                    {/* <p className="body-text-p2"><small>Color Palette</small></p> */}
                    <h3 className="section-title-h3">Color Usage</h3>
                    <p className="body-text-p1">Together, these colors create a balanced yet dynamic palette that communicates trust and professionalism (through blue tones) and boldness or passion (through red). This combination reflects qualities often associated with space exploration: intelligence, reliability, and the adventurous spirit of discovery.</p>
                  </div>
              </div>
            </div>

            <div className="work-section">
              <div className="work-container">
                  <div>
                    {/* <p className="body-text-p2"><small>Color Palette</small></p> */}
                    <h3 className="section-title-h3">Iconography</h3>
                    <p className="body-text-p1">These icons would look striking in the selected colors, with navy and dark blue for backgrounds or bases and the red for highlights, giving them a sharp, cohesive look that reinforces the space exploration theme.</p>
                  </div>

                  <div className="m-auto grid grid-cols-2 gap-4">
                    <img src="./images/nasa/icon001.png" alt="" />
                    <img src="./images/nasa/icon002.png" alt="" />
                  </div>
              </div>
            </div>
            

            <div className="work-section">
              <div className="work-container">
                  <div>
                    {/* <p className="body-text-p2"><small>Color Palette</small></p> */}
                    <h3 className="section-title-h3">Design Kit</h3>
                    <p className="body-text-p1">These icons would look striking in the selected colors, with navy and dark blue for backgrounds or bases and the red for highlights, giving them a sharp, cohesive look that reinforces the space exploration theme.</p>
                  </div>

                  <div className="m-auto grid grid-cols-3 gap-4">
                    <img src="./images/nasa/comp001.png" alt="" />
                    <img src="./images/nasa/comp002.png" alt="" />
                    <img src="./images/nasa/comp003.png" alt="" />
                  </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 work-section">
              <div className="work-container">
                  <div>
                    {/* <p className="body-text-p2"><small>Color Palette</small></p> */}
                    <h3 className="section-title-h3">Typography</h3>
                    <p className="body-text-p1">Choosing Noto Sans as the typeface offers several benefits. It’s designed for easy reading across different languages and platforms, ensuring clarity and accessibility for diverse users. Noto Sans supports a wide range of characters and scripts, maintaining a consistent appearance across various devices. Being part of the open-source Google Noto font family makes it cost effective and widely accessible for projects with different budget constraints. Overall, Noto Sans is a practical chose for projects needing clear communication and readability across a global audience.</p>
                  </div>
              </div>

              <div>
                  <img src="./images/nasa/typo.jpg" alt="" />
              </div>
            </div>


        </div>
        
      </section>
    )
  }
  
  export default Work;
  