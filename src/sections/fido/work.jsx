export const Work = () => {
    return (
      <section className="w-full">
        <div className="mx-24 my-auto work-section">
            <h2 className="col-span-2 section-title-h2">UX Design Study</h2>

            <div className="grid grid-cols-2 gap-4 work-section">
              <div>
                  <img src="./images/fido/existing-userflow.svg" alt="" />
              </div>
              <div className="work-container">
                  <div>
                    {/* <p className="body-text-p2"><small>Color Palette</small></p> */}
                    <h2 className="section-title-h2">Pain points</h2>
                    {/* <p className="body-text-p1">Together, these colors create a balanced yet dynamic palette that communicates trust and professionalism (through blue tones) and boldness or passion (through red). This combination reflects qualities often associated with space exploration: intelligence, reliability, and the adventurous spirit of discovery.</p> */}
                    <ul className="gap-4">
                      <li>The usage page is too cluttered, causing users to get lost and end up only checking data usage instead of using the app as a straightforward platform for making payments.</li>
                      <li>The payment gateway is hard to find because it requires navigating through the Billing section.</li>
                      <li>Existing users always have to manually enter their credit or debit card information before paying the bill.</li>
                      <li>Users often find it challenging to locate the option to change their current data plan.</li>
                      <li>The profile page is difficult to locate. Users have to explore or click all the CTA of the whole app  to find the profile settings.</li>
                    </ul>
                  </div>
              </div>
            </div>

            <div className="work-section">
              <div className="work-container">
                  <div>
                    {/* <p className="body-text-p2"><small>Color Palette</small></p> */}
                    <h2 className="section-title-h2">Iconography</h2>
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
                    <h2 className="section-title-h2">Design Kit</h2>
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
                    <h2 className="section-title-h2">Typography</h2>
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
  