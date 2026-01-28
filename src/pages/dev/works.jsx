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
                    <Link to="https://luiscbaptistajr.com" target="_blank"><img className="card-img" src="./images/web/Portfolio.jpg" alt="" /></Link>
                    {/* <Link className='nav-link' to="/about">About</Link> */}
                    <div className="work-detail">
                        <h3><Link to="https://luiscbaptistajr.com" target="_blank">My Portfolio</Link></h3>
                        <ul className="specs">
                            <li><small>Frontend Development</small></li>
                            <li><small>React.JS</small></li>
                            <li><small>GIT Pages</small></li>
                            <li><small>TailwindCSS</small></li>
                            <li><small>HTML 5</small></li>
                            <li><small>JQuery</small></li>
                            <li><small>CSS 3 - SASS</small></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="card-items">
                    <Link to="https://prepup.ca" target="_blank"><img className="card-img" src="./images/web/PrepUp.jpg" alt="" /></Link>
                    {/* <Link className='nav-link' to="/about">About</Link> */}
                    <div className="work-detail">
                        <h3><Link to="https://prepup.ca" target="_blank">PrepUp Landing Page</Link></h3>
                        <ul className="specs">
                            <li><small>Frontend Development</small></li>
                            <li><small>React.JS</small></li>
                            <li><small>GIT Pages</small></li>
                            <li><small>TailwindCSS</small></li>
                            <li><small>HTML 5</small></li>
                            <li><small>JQuery</small></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="card-items">
                    <Link to="https://luiscbaptistajr.github.io/portfolio/aggregator/index.html" target="_blank"><img className="card-img" src="./images/web/PSY.jpg" alt="" /></Link>
                    {/* <Link className='nav-link' to="/about">About</Link> */}
                    <div className="work-detail">
                        <h3><Link to="https://luiscbaptistajr.github.io/portfolio/aggregator/index.html" target="_blank">Hashtag aggregator using dialogue feed</Link></h3>
                        <ul className="specs">
                            <li><small>Frontend Development</small></li>
                            <li><small>API Aggregator</small></li>
                            <li><small>JSON Data Load</small></li>
                            <li><small>HTML 5</small></li>
                            <li><small>JQuery</small></li>
                            <li><small>AJAX</small></li>
                            <li><small>CSS 3 - SASS</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <Link to="https://luiscbaptistajr.github.io/portfolio/otwol/index.html" target="_blank"><img className="card-img" src="./images/web/OTWOL.jpg" alt="" /></Link>
                    <div className="work-detail">
                        <h3><Link to="https://luiscbaptistajr.github.io/portfolio/otwol/index.html" target="_blank">Interactive Notebook</Link></h3>
                        <ul className="specs">
                            <li><small>Frontend Development</small></li>
                            <li><small>HTML 5</small></li>
                            <li><small>JQuery</small></li>
                            <li><small>CSS 3 - SASS</small></li>
                        </ul>
                    </div>
                </div>

                <div className="card-items">
                    <Link to="https://luiscbaptistajr.github.io/portfolio/news/index.html" target="_blank"><img className="card-img" src="./images/web/NEWS.jpg" alt="" /></Link>
                    <div className="work-detail">
                        <h3><Link to="https://drive.google.com/file/d/1MH77n_kgjjLJ5X5eJzlX0ua73PCHTzto/view" target="_blank">ABS-CBN News - Article Page</Link></h3>
                        <ul className="specs">
                            <li><small>Frontend Development</small></li>
                            <li><small>Infinite Loop</small></li>
                            <li><small>Mobile Responsive</small></li>
                            <li><small>JSON Data Load</small></li>
                            <li><small>HTML 5</small></li>
                            <li><small>JQuery</small></li>
                            <li><small>AJAX</small></li>
                            <li><small>CSS 3 - SASS</small></li>
                        </ul>
                    </div>
                    
                </div>

                <div className="card-items">
                    <Link to="https://luiscbaptistajr.github.io/portfolio/abscbn-sports/index.html" target="_blank"><img className="card-img" src="./images/web/SPORTS.jpg" alt="" /></Link>
                    <div className="work-detail">
                        <h3><Link to="https://drive.google.com/file/d/1MH77n_kgjjLJ5X5eJzlX0ua73PCHTzto/view" target="_blank">ABS-CBN Sports Website</Link></h3>
                        <ul className="specs">
                            <li><small>Frontend Development</small></li>
                            <li><small>Mobile Responsive</small></li>
                            <li><small>HTML 5</small></li>
                            <li><small>JQuery</small></li>
                            <li><small>CSS 3 - SASS</small></li>
                        </ul>
                    </div>
                </div>

                <div className="card-items">
                    <Link to="https://luiscbaptistajr.github.io/portfolio/myxvj-search/index.html" target="_blank"><img className="card-img" src="./images/web/Promo.jpg" alt="" /></Link>
                    <div className="work-detail">
                        <h3><Link to="https://drive.google.com/file/d/1MH77n_kgjjLJ5X5eJzlX0ua73PCHTzto/view" target="_blank">MYX VJ Search Promo Site</Link></h3>
                        <ul className="specs">
                            <li><small>Frontend Development</small></li>
                            <li><small>Mobile Responsive</small></li>
                            <li><small>HTML 5</small></li>
                            <li><small>JQuery</small></li>
                            <li><small>CSS 3 - SASS</small></li>
                        </ul>
                    </div>
                </div>

                <div className="card-items">
                    <Link to="https://luiscbaptistajr.github.io/portfolio/one-run/index.html" target="_blank"><img className="card-img" src="./images/web/ONERun.jpg" alt="" /></Link>
                    <div className="work-detail">
                        <h3><Link to="https://luiscbaptistajr.github.io/portfolio/one-run/index.html" target="_blank">One Run PH - Promo Site</Link></h3>
                        <ul className="specs">
                            <li><small>Frontend Development</small></li>
                            <li><small>Desktop</small></li>
                            <li><small>Countdown</small></li>
                            <li><small>HTML 5</small></li>
                            <li><small>JQuery</small></li>
                            <li><small>CSS 3 - SASS</small></li>
                        </ul>
                    </div>
                </div>

                <div className="card-items">
                    <Link to="https://luiscbaptistajr.github.io/portfolio/globe/index.html" target="_blank"><img className="card-img" src="./images/web/Globe.jpg" alt="" /></Link>
                    <div className="work-detail">
                        <h3><Link to="https://luiscbaptistajr.github.io/portfolio/globe/index.html" target="_blank">Globe Telecom Website</Link></h3>
                        <ul className="specs">
                            <li><small>Frontend Development</small></li>
                            <li><small>Team Collaboration</small></li>
                            <li><small>PHP</small></li>
                            <li><small>HTML 5</small></li>
                            <li><small>JQuery</small></li>
                            <li><small>CSS 3 - SASS</small></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Works;