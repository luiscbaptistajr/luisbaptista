export const Work = () => {
    return (
      <section className="w-full">
        <div className="mx-24 my-auto grid grid-cols-2 gap-4 work-section">
            <h2 className="col-span-2 section-title-h2">Work Affiliations</h2>
            <div className="work-container">
                <div>
                  <p className="job-year"><small>2022 - 2024</small></p>
                  <p className="job-role">Head of Web Development</p>
                  <p className="job-place">at Bruntwork</p>
                  <p className="job-task">Lorem ipsum dolor sit amet. Nam quia sint et placeat odit eos vero enim. Aut culpa dolore eum perspiciatis quis hic fugit magnam non dicta consectetur hic facere velit qui neque enim non ipsum perferendis</p>
                </div>
                <div>
                  <p className="job-year"><small>2011 - 2023</small></p>
                  <p className="job-role">Full-Stack Developer</p>
                  <p className="job-place">at ABS-CBN Corporation</p>
                  <p className="job-task">Lorem ipsum dolor sit amet. Nam quia sint et placeat odit eos vero enim. Aut culpa dolore eum perspiciatis quis hic fugit magnam non dicta consectetur hic facere velit qui neque enim non ipsum perferendis</p>
                </div>
                <div>
                  <p className="job-year"><small>2009 - 2010</small></p>
                  <p className="job-role">Jr Graphic UI Designer</p>
                  <p className="job-place">at MultiSoftware Asia Inc.</p>
                  <p className="job-task">Lorem ipsum dolor sit amet. Nam quia sint et placeat odit eos vero enim. Aut culpa dolore eum perspiciatis quis hic fugit magnam non dicta consectetur hic facere velit qui neque enim non ipsum perferendis</p>
                </div>
                <div>
                  <p className="job-year"><small>2008 - 2009</small></p>
                  <p className="job-role">Technical Assistant</p> 
                  <p className="job-role">at Jollibee Food Corporation c/o Corporate Executive Search</p>
                  <p className="job-task">Lorem ipsum dolor sit amet. Nam quia sint et placeat odit eos vero enim. Aut culpa dolore eum perspiciatis quis hic fugit magnam non dicta consectetur hic facere velit qui neque enim non ipsum perferendis</p>
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
  