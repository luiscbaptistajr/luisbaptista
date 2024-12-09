export const Work = () => {
    const inlineStyle = {
      backgroundColor: "#FFEAD9",
      padding: '0 1rem',
      borderRadius: '12px'
    };
    return (
      <section className="w-full">
        <div className="work-section">
            <h2 className="col-span-2 section-title-h2">UI Design Study</h2>

            <div className="block-container wgrid">
              <div style={inlineStyle}>
                  <img src="./images/pu/colors.png" alt="" />
              </div>
              <div className="work-container">
                  <div>
                    {/* <p className="body-text-p2"><small>Color Palette</small></p> */}
                    <h3 className="section-title-h3">Color Usage</h3>
                    <p className="body-text-p1">The color palette features a vibrant Yappy Yellow for accents, a bold Vivid Fearless Red for alerts, a calming Soft Breezy Blue for informational elements, and a gentle Nifty Nude for backgrounds, creating a balanced and energetic design.</p>
                  </div>
              </div>
            </div>

            <div className="block-container wgrid">
              
              <div className="work-container">
                  <div>
                    {/* <p className="body-text-p2"><small>Color Palette</small></p> */}
                    <h3 className="section-title-h3">Iconography</h3>
                    <p className="body-text-p1">The design team created icons that would help the user navigate through PrepUp. These ranged from outlines, filled, and colored. It is mostly rounded so that it matches the aesthetic of other buttons/components in PrepUp.</p>
                    <p className="body-text-p1">The created icons are scattered all through PrepUp, and combined with the components, it makes for a favorable user experience for reviewing and practicing interviews.</p>
                  </div>
              </div>

              <div style={inlineStyle}>
                  <img src="./images/pu/icon001.png" alt="" />
              </div>
            </div>
            

            {/* <div className="block-container ngrid">
              <div className="work-container">
                  <div>
                    <p className="body-text-p2"><small>Color Palette</small></p>
                    <h3 className="section-title-h3">Design Kit</h3>
                    <p className="body-text-p1">These icons would look striking in the selected colors, with navy and dark blue for backgrounds or bases and the red for highlights, giving them a sharp, cohesive look that reinforces the space exploration theme.</p>
                  </div>

                  <div className="ss-images temp-position-3">
                    <img src="./images/nasa/comp001.png" alt="" />
                    <img src="./images/nasa/comp002.png" alt="" />
                    <img src="./images/nasa/comp003.png" alt="" />
                  </div>
              </div>
            </div> */}
            
            <div className="block-container wgrid">
            <div style={inlineStyle}>
                  <img src="./images/nasa/typo.jpg" alt="" />
              </div>
              <div className="work-container">
                    {/* <p className="body-text-p2"><small>Color Palette</small></p> */}
                    <h3 className="section-title-h3">Typography</h3>
                    <p className="body-text-p1">Choosing Noto Sans as the typeface offers several benefits. It’s designed for easy reading across different languages and platforms, ensuring clarity and accessibility for diverse users. Noto Sans supports a wide range of characters and scripts, maintaining a consistent appearance across various devices. Being part of the open-source Google Noto font family makes it cost effective and widely accessible for projects with different budget constraints. Overall, Noto Sans is a practical chose for projects needing clear communication and readability across a global audience.</p>
              </div>

              
            </div>


        </div>
        
      </section>
    )
  }
  
  export default Work;
  