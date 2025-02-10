export const Work = () => {
    return (
      <section className="w-full">
        <div className="grid grid-cols-2 gap-4 work-section">
            <h2 className="col-span-2 section-title-h2">Work Affiliations</h2>
            <div className="work-container">
                <div>
                  <p className="job-year"><small>2022 - 2024</small></p>
                  <p className="job-role">Head of Web Development</p>
                  <p className="job-place">at Bruntwork</p>
                  <p className="job-task body-text-p1">
                    <ul>
                      <li>Achieved 95% to improve all website’s performance in Google Search rankings. The issue was causing slow page loads. It was resolved by identifying and addressing unimplemented latest security measure and outdated plugins.</li>
                      <li>Achieved a 99% improvement in workflow efficiency by addressing process inefficiencies and bottlenecks. The lack of flexibility in previous workflows led to delays, so I implemented a customized agile methodology to optimize operations and enhance team productivity.</li>
                      <li>Improved +15% project efficiency and team productivity by addressing task overload and unclear responsibilities. These challenges were causing delays, so I delegated tasks strategically based on team strengths, ensuring clear expectations and balanced workloads.</li>
                    </ul>
                  </p>
                </div>
                <div>
                  <p className="job-year"><small>2011 - 2023</small></p>
                  <p className="job-role">Software Developer</p>
                  <p className="job-place">at ABS-CBN Corporation</p>
                  <p className="job-task body-text-p1">
                    <ul>
                      <li>Led Front-End Development to optimize user experience to 95% across devices by addressing inconsistent website performance. Developed responsive websites for both desktop and mobile, ensuring seamless functionality and design on all platforms.</li>
                      <li>Led as Subject Matter Expert (SME) for Single-Sign-On (SSO) Project to enhance user experience by ensuring seamless Single Sign-On (SSO) integration, solving the problem of inconsistent authentication across platforms. This streamlined access, improving ease of use and efficiency.</li>
                      <li>Assigned as Technical PM for Single-Sign-On (SSO) Project to ensure timely project completion by addressing task misalignment with project goals. Delegated technical tasks effectively to internal/vendors developers, ensuring clear alignment with project timelines, available resources, and business objectives.</li>
                      <li>Implemented a structured feedback loop for a team of 10 developers, enabling real-time performance assessments.</li>
                    </ul>
                  </p>
                </div>
                <div>
                  <p className="job-year"><small>2009 - 2010</small></p>
                  <p className="job-role">Jr Graphic UI Designer</p>
                  <p className="job-place">at MultiSoftware Asia Inc.</p>
                  {/* <p className="job-task">Lorem ipsum dolor sit amet. Nam quia sint et placeat odit eos vero enim. Aut culpa dolore eum perspiciatis quis hic fugit magnam non dicta consectetur hic facere velit qui neque enim non ipsum perferendis</p> */}
                </div>
                <div>
                  <p className="job-year"><small>2008 - 2009</small></p>
                  <p className="job-role">Technical Assistant</p> 
                  <p className="job-role">at Jollibee Food Corporation c/o Corporate Executive Search</p>
                  {/* <p className="job-task">Lorem ipsum dolor sit amet. Nam quia sint et placeat odit eos vero enim. Aut culpa dolore eum perspiciatis quis hic fugit magnam non dicta consectetur hic facere velit qui neque enim non ipsum perferendis</p> */}
                </div>
            </div>
            <div className="company-logo-container">
                <img className="logo-bw" src="./images/logo-bw.svg" alt="" />
                <img className="logo-abs" src="./images/logo-abs.svg" alt="" />
                <img className="logo-multiS" src="./images/logo-multi.svg" alt="" />
                <img className="logo-jfc" src="./images/logo-jfc.svg" alt="" />
            </div>
          
        </div>
      </section>
    )
  }
  
  export default Work;
  