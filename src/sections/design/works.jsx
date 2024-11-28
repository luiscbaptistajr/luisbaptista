import { Link } from 'react-router-dom';

export const Works = () => {
  return (
    <section className="w-full">
        <div className="mx-24 my-auto portfolio-works-section">
            {/* <ul className="list-blocks">
                <li><a href="">UI/UX</a></li>
                <li><a href="">Graphics</a></li>
                <li><a href="">Audio/Video Production</a></li>
                <li><a href="">Design Challenge</a></li>
            </ul> */}
            
            <div className="card-container grid grid-cols-3 gap-4">
                <div className="card-items">
                    <Link to="/nasa"><img className="card-img" src="./images/NASA.jpg" alt="" /></Link>
                    {/* <Link className='nav-link' to="/about">About</Link> */}
                    <div className="work-detail">
                        <h3>UI App Design Study</h3>
                        <p>Role</p>
                        <ul className="specs">
                            <li><small>UI/UX</small></li>
                            <li><small>Web Design</small></li>
                            <li><small>Project Manager</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <Link to="/fido"><img className="card-img" src="./images/FIDO.jpg" alt="" /></Link>
                    <div className="work-detail">
                        <h3>UX Design Study: Page under construction</h3>
                        <p>Role</p>
                        <ul className="specs">
                            <li><small>UX Designer</small></li>
                            <li><small>Research</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <img className="card-img" src="./images/BudgetBuddy.jpg" alt="" />
                    <div className="work-detail">
                        <h3>Coming Soon</h3>
                        <p>Role</p>
                        <ul className="specs">
                            <li><small>UI/UX Design</small></li>
                            <li><small>Web Design</small></li>
                            <li><small>Project Manager</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <img className="card-img" src="./images/PrepUp.jpg" alt="" />
                    <div className="work-detail">
                        <h3>Coming Soon</h3>
                        <p>Role</p>
                        <ul className="specs">
                            <li><small>UI/UX</small></li>
                            <li><small>Web Design</small></li>
                            <li><small>Project Manager</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <img className="card-img" src="./images/VancouverDestination.jpg" alt="" />
                    <div className="work-detail">
                        <h3>Coming Soon</h3>
                        <p>Role</p>
                        <ul className="specs">
                            <li><small>UI/UX Designer</small></li>
                            <li><small>Web Design</small></li>
                            <li><small>Research</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <img className="card-img" src="./images/BUSKR.jpg" alt="" />
                    <div className="work-detail">
                        <h3>Coming Soon</h3>
                        <p>Role</p>
                        <ul className="specs">
                            <li><small>UI/UX</small></li>
                            <li><small>Mobile Application Design</small></li>
                            <li><small>Research</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <img className="card-img" src="./images/loba.jpg" alt="" />
                    <div className="work-detail">
                        <h3>Coming Soon</h3>
                        <p>Role</p>
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