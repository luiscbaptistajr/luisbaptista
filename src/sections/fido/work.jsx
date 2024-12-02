import { Link } from 'react-router-dom';

export const Work = () => {
    return (
      <section className="w-full">
        <div className="work-section">
            <h2 className="col-span-2 section-title-h2">UX Design Study</h2>
            
            <div className="block-container wgrid">
              <div>
                <Link target="_blank" to="https://s3-alpha-sig.figma.com/img/fd4c/90ae/5aef6546a74a503c3c8fb49e10627014?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QSJ2gQrcRgEBBJbR-neON33~7GP0QtHSXYur2Jv6Vq6iNdlL-p9MF0a-9U59OpuoshBVr2F6fs9Ih8asd48GIqLiXn9VLtPnFcjGCjPiVogG9TYG7h-zf2LT3W3PbEX12WxWmmaopZZfvnHW20jA5pbs5pDFYRGzOl~riPfUymeXJ42ty4PT0BvOxuNS2ig9Z2vrUr8ss2iTyPFPma3L9FETLvEWXMy5QoAJizRXdjnkNVlZqangcn6fMz6oXsEkVZVoJOh7GuWfCkqHMuaIU5oObIgBPcc8CVJ7mzoSKtroVCflmzLPPRMjMsPEN6herS8mwQ8bTcYjxg5uArGNzA__"><img src="./images/fido/existing-userflow.svg" alt="" /></Link>
              </div>
              <div className="work-container">
                  <div>
                    {/* <p className="body-text-p2"><small>Color Palette</small></p> */}
                    <h2 className="section-title-h2">Pain points - User Flow</h2>
                    {/* <p className="body-text-p1">Together, these colors create a balanced yet dynamic palette that communicates trust and professionalism (through blue tones) and boldness or passion (through red). This combination reflects qualities often associated with space exploration: intelligence, reliability, and the adventurous spirit of discovery.</p> */}
                    <ul className="item-list">
                      <li><span className="annotation">A</span>The usage page is too cluttered, causing users to get lost and end up only checking data usage instead of using the app as a straightforward platform for making payments.</li>
                      <li><span className="annotation">B</span>The payment gateway is hard to find because it requires navigating through the Billing section.</li>
                      <li><span className="annotation">C</span>Existing users always have to manually enter their credit or debit card information before paying the bill.</li>
                      <li><span className="annotation">D</span>Users often find it challenging to locate the option to change their current data plan.</li>
                      <li><span className="annotation">E</span>The profile page is difficult to locate. Users have to explore or click all the CTA of the whole app  to find the profile settings.</li>
                    </ul>
                  </div>
              </div>
            </div>

            {/* <div className="work-section">
              <div className="work-container">
                  <div>
                    <h2 className="section-title-h2">Iconography</h2>
                    <p className="body-text-p1">These icons would look striking in the selected colors, with navy and dark blue for backgrounds or bases and the red for highlights, giving them a sharp, cohesive look that reinforces the space exploration theme.</p>
                  </div>

                  <div className="m-auto grid grid-cols-2 gap-4">
                    <img src="./images/nasa/icon001.png" alt="" />
                    <img src="./images/nasa/icon002.png" alt="" />
                  </div>
              </div>
            </div> */}
            

            {/* <div className="work-section">
              <div className="work-container">
                  <div>
                    <h2 className="section-title-h2">Design Kit</h2>
                    <p className="body-text-p1">These icons would look striking in the selected colors, with navy and dark blue for backgrounds or bases and the red for highlights, giving them a sharp, cohesive look that reinforces the space exploration theme.</p>
                  </div>

                  <div className="m-auto grid grid-cols-3 gap-4">
                    <img src="./images/nasa/comp001.png" alt="" />
                    <img src="./images/nasa/comp002.png" alt="" />
                    <img src="./images/nasa/comp003.png" alt="" />
                  </div>
              </div>
            </div> */}

            {/* <div className="grid grid-cols-2 gap-4 work-section">
              <div className="work-container">
                  <div>
                    <h2 className="section-title-h2">Typography</h2>
                    <p className="body-text-p1">Choosing Noto Sans as the typeface offers several benefits. It’s designed for easy reading across different languages and platforms, ensuring clarity and accessibility for diverse users. Noto Sans supports a wide range of characters and scripts, maintaining a consistent appearance across various devices. Being part of the open-source Google Noto font family makes it cost effective and widely accessible for projects with different budget constraints. Overall, Noto Sans is a practical chose for projects needing clear communication and readability across a global audience.</p>
                  </div>
              </div>

              <div>
                  <img src="./images/nasa/typo.jpg" alt="" />
              </div>
            </div> */}


        </div>
        
      </section>
    )
  }
  
  export default Work;
  