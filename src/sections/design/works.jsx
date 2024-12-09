import { Link } from 'react-router-dom';

export const Works = () => {
  return (
    <section className="w-full">
        <div className="portfolio-works-section">
            {/* <ul className="list-blocks">
                <li><a href="">UI/UX</a></li>
                <li><a href="">Graphics</a></li>
                <li><a href="">Audio/Video Production</a></li>
                <li><a href="">Design Challenge</a></li>
            </ul> */}
            
            <div className="card-container">
                <div className="card-items">
                    <Link to="/nasa" target="_blank"><img className="card-img" src="./images/NASA.jpg" alt="" /></Link>
                    {/* <Link className='nav-link' to="/about">About</Link> */}
                    <div className="work-detail">
                        <h3>UI App Design Study</h3>
                        <ul className="specs">
                            <li><small>UI/UX Design</small></li>
                            <li><small>Web Design</small></li>
                            <li><small>Project Management</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <Link to="/fido" target="_blank"><img className="card-img" src="./images/FIDO.jpg" alt="" /></Link>
                    <div className="work-detail">
                        <h3>UX Design Study: Page under construction</h3>
                        <ul className="specs">
                            <li><small>UX Design</small></li>
                            <li><small>UX Research</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <Link to="/bb" target="_blank"><img className="card-img" src="./images/BudgetBuddy.jpg" alt="" /></Link>
                    <div className="work-detail">
                        <h3><Link to="https://drive.google.com/file/d/1MH77n_kgjjLJ5X5eJzlX0ua73PCHTzto/view" target="_blank">B2B2C Project - Coming Soon</Link></h3>
                        <ul className="specs">
                            <li><small>UI/UX Design</small></li>
                            <li><small>Web Design</small></li>
                            <li><small>Project Management</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <Link to="/prep" target="_blank"><img className="card-img" src="./images/PrepUp.jpg" alt="" /></Link>
                    <div className="work-detail">
                        <h3>Capstone Project</h3>
                        <ul className="specs">
                            <li><small>UI/UX</small></li>
                            <li><small>Web Design</small></li>
                            <li><small>Product Management</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <img className="card-img not-ready" src="./images/VancouverDestination.jpg" alt="" />
                    <div className="work-detail">
                        <h3>Coming Soon</h3>
                        <ul className="specs">
                            <li><small>UI/UX Designer</small></li>
                            <li><small>Web Design</small></li>
                            <li><small>Research</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <img className="card-img not-ready" src="./images/BUSKR.jpg" alt="" />
                    <div className="work-detail">
                        <h3>Coming Soon</h3>
                        <ul className="specs">
                            <li><small>UI/UX</small></li>
                            <li><small>Mobile Application Design</small></li>
                            <li><small>Research</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <img className="card-img not-ready" src="./images/loba.jpg" alt="" />
                    <div className="work-detail">
                        <h3>Coming Soon</h3>
                        <ul className="specs">
                            <li><small>UI/UX Designer</small></li>
                            <li><small>Mobile App Designer</small></li>
                            <li><small>Research</small></li>
                        </ul>
                    </div>
                    
                </div>

            </div>
        </div>
    </section>
  )
}

export default Works;