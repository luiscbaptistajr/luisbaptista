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
                        <h3><Link to="/nasa" target="_blank">UI App Design Study</Link></h3>
                        <ul className="specs">
                            <li><small>UI/UX Design</small></li>
                            <li><small>Web Design</small></li>
                            <li><small>Design Thinking</small></li>
                            <li><small>Usability Testing</small></li>
                            <li><small>Individual Project</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <Link to="/fido" target="_blank"><img className="card-img" src="./images/FIDO.jpg" alt="" /></Link>
                    <div className="work-detail">
                        <h3><Link to="/fido" target="_blank">UX Design Study</Link></h3>
                        <ul className="specs">
                            <li><small>UX Design</small></li>
                            <li><small>UX Research</small></li>
                            <li><small>Information Architecture</small></li>
                            <li><small>Usability Testing</small></li>
                            <li><small>Individual Project</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <Link to="/bb" target="_blank"><img className="card-img" src="./images/BudgetBuddy.jpg" alt="" /></Link>
                    <div className="work-detail">
                        <h3><Link to="/bb" target="_blank">B2B2C SASS Project </Link></h3>
                        <ul className="specs">
                            <li><small>UI/UX Design</small></li>
                            <li><small>Web Design</small></li>
                            <li><small>Project Management</small></li>
                            <li><small>Team Management</small></li>
                            <li><small>Team Collaboration</small></li>
                            <li><small>Case Study</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <Link to="/prep" target="_blank"><img className="card-img" src="./images/PrepUp.jpg" alt="" /></Link>
                    <div className="work-detail">
                        <h3><Link to="/prep" target="_blank">Capstone Project</Link></h3>
                        <ul className="specs">
                            <li><small>UI/UX</small></li>
                            <li><small>Web Design</small></li>
                            <li><small>Product Management</small></li>
                            <li><small>Team Management</small></li>
                            <li><small>Team Collaboration</small></li>
                            <li><small>Case Study</small></li>
                        </ul>
                    </div>
                    
                </div>
                
                {/* https://www.figma.com/proto/3IYv9tMZxZie6ijKVCXLsy/DestinationVancouver?page-id=123%3A62011&node-id=123-62983&p=f&viewport=-2204%2C124%2C0.15&t=COmjXZEhYCsZ40hR-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=123%3A62983 */}

                <div className="card-items">
                    <Link to="https://www.figma.com/proto/3IYv9tMZxZie6ijKVCXLsy/DestinationVancouver?page-id=123%3A62011&node-id=123-62983&p=f&viewport=-2204%2C124%2C0.15&t=COmjXZEhYCsZ40hR-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=123%3A62983" target="_blank"><img className="card-img" src="./images/VancouverDestination.jpg" alt="" /></Link>
                    <div className="work-detail">
                        <h3>Destination Vancouver Website Design</h3>
                        <ul className="specs">
                            <li><small>UI/UX Designer</small></li>
                            <li><small>Web Design</small></li>
                            <li><small>Prototype</small></li>
                            <li><small>Individual Project</small></li>
                        </ul>
                    </div>
                    
                </div>

                {/* https://www.figma.com/proto/L4ZBoMKULNgqbKUs8Q5i5E/Loba-Design?page-id=0%3A1&node-id=20-5836&viewport=-163%2C-315%2C0.07&t=RI5LeQiWSZlLBJFc-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=20%3A5836&show-proto-sidebar=1 */}
                <div className="card-items">
                    <Link to="https://www.figma.com/proto/L4ZBoMKULNgqbKUs8Q5i5E/Loba-Design?page-id=0%3A1&node-id=20-5836&viewport=-163%2C-315%2C0.07&t=RI5LeQiWSZlLBJFc-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=20%3A5836&show-proto-sidebar=1" target="_blank"><img className="card-img" src="./images/loba.jpg" alt="" /></Link>
                    <div className="work-detail">
                        <h3>LOBA UI - Mobile Design Challenge</h3>
                        <ul className="specs">
                            <li><small>UI/UX Designer</small></li>
                            <li><small>Mobile App Designer</small></li>
                            <li><small>Prototype</small></li>
                            <li><small>Individual Project</small></li>
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

                

            </div>
        </div>
    </section>
  )
}

export default Works;