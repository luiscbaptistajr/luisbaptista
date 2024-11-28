export const Wireframes = () => {
    return (
      <section className="w-full">
        <div className="mx-24 my-auto grid grid-cols-2 gap-4 Wireframes-section">
          {/* <h2 className="col-span-2 section-title-h2">Old Design</h2> */}

          {/* <img src="./images/nasa/current-001.jpg" alt="" />
          <img src="./images/nasa/current-002.jpg" alt="" /> */}
          
          <h2 className="col-span-2 section-title-h2">Existing Design</h2>

          
          <div className="work-container">
            <div>
                {/* <p className="body-text-p2"><small>Color Palette</small></p> */}
                {/* <h2 className="section-title-h2">Pain points - User Flow</h2> */}
                {/* <p className="body-text-p1">Together, these colors create a balanced yet dynamic palette that communicates trust and professionalism (through blue tones) and boldness or passion (through red). This combination reflects qualities often associated with space exploration: intelligence, reliability, and the adventurous spirit of discovery.</p> */}
                <ul className="item-list">
                  <li><span className="annotation">A</span>The usage page is too cluttered, causing users to get lost and end up only checking data usage instead of using the app as a straightforward platform for making payments.</li>
                  <li><span className="annotation">B</span>The payment gateway is hard to find because it requires navigating through the Billing section.</li>
                  {/* <li><span className="annotation">C</span>Existing users always have to manually enter their credit or debit card information before paying the bill.</li>
                  <li><span className="annotation">D</span>Users often find it challenging to locate the option to change their current data plan.</li>
                  <li><span className="annotation">E</span>The profile page is difficult to locate. Users have to explore or click all the CTA of the whole app  to find the profile settings.</li> */}
                </ul>
              </div>
          </div>
          <div>
            <img src="./images/fido/screenset-001.jpg" alt="" />
          </div>
          

          <div className="work-container">
            <div>
                {/* <p className="body-text-p2"><small>Color Palette</small></p> */}
                {/* <h2 className="section-title-h2">Pain points - User Flow</h2> */}
                {/* <p className="body-text-p1">Together, these colors create a balanced yet dynamic palette that communicates trust and professionalism (through blue tones) and boldness or passion (through red). This combination reflects qualities often associated with space exploration: intelligence, reliability, and the adventurous spirit of discovery.</p> */}
                <ul className="item-list">
                  {/* <li><span className="annotation">A</span>The usage page is too cluttered, causing users to get lost and end up only checking data usage instead of using the app as a straightforward platform for making payments.</li>
                  <li><span className="annotation">B</span>The payment gateway is hard to find because it requires navigating through the Billing section.</li> */}
                  <li><span className="annotation">C</span>Existing users always have to manually enter their credit or debit card information before paying the bill.</li>
                  <li><span className="annotation">D</span>Users often find it challenging to locate the option to change their current data plan.</li>
                  <li><span className="annotation">E</span>The profile page is difficult to locate. Users have to explore or click all the CTA of the whole app  to find the profile settings.</li>
                </ul>
              </div>
          </div>
          <div>
            <img src="./images/fido/screenset-002.jpg" alt="" />
          </div>

          <h2 className="col-span-2 section-title-h2">UX Design Challenge</h2>

          <div>
            <img src="./images/fido/new-user-flow.svg" alt="" />
          </div>
          <div className="work-container">
            <div>
                {/* <p className="body-text-p2"><small>Color Palette</small></p> */}
                <h2 className="section-title-h2">New User Flow</h2>
                {/* <p className="body-text-p1">Together, these colors create a balanced yet dynamic palette that communicates trust and professionalism (through blue tones) and boldness or passion (through red). This combination reflects qualities often associated with space exploration: intelligence, reliability, and the adventurous spirit of discovery.</p> */}
                <ul className="item-list">
                  <li><span className="annotation">A</span>The usage page is too cluttered, causing users to get lost and end up only checking data usage instead of using the app as a straightforward platform for making payments.</li>
                  <li><span className="annotation">B</span>The payment gateway is hard to find because it requires navigating through the Billing section.</li>
                  {/* <li><span className="annotation">C</span>Existing users always have to manually enter their credit or debit card information before paying the bill.</li>
                  <li><span className="annotation">D</span>Users often find it challenging to locate the option to change their current data plan.</li>
                  <li><span className="annotation">E</span>The profile page is difficult to locate. Users have to explore or click all the CTA of the whole app  to find the profile settings.</li> */}
                </ul>
              </div>
          </div>
          
        </div>
      </section>
    )
  }
  
  export default Wireframes;
  