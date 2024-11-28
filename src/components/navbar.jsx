import { useRef } from "react";
import PropTypes from "prop-types";

// import { HashRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import About from '../pages/about';
// import Design from '../pages/design';
// import Development from '../pages/development';

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const navItems = [
        {
          label: 'About',
          link: '/about',
          className: 'nav-link'
        },
        {
          label: 'Design',
          link: '/design',
          className: 'nav-link'
        },
        {
          label: 'Development',
          link: '/development',
          className: 'nav-link'
        }
        // ,
        // {
        //   label: 'Contact',
        //   link: '#contact',
        //   className: 'nav-link'
        // },
        // {
        //     label: 'LinkedIn',
        //     link: '#linkedin',
        //     className: 'nav-link'
        // },
        // {
        //     label: 'Github',
        //     link: '#github',
        //     className: 'nav-link'
        // },
        // {
        //     label: 'Behance',
        //     link: '#behance',
        //     className: 'nav-link'
        // }
    ];
  
    return (
            <nav className={'navbar ' + (navOpen ? 'active' : '')}>
                {
                   
                    navItems.map(({ label, link, className, ref }, key) => (
                        <Link 
                        to={link}
                        key={key} 
                        ref={ref}
                        className={className}
                        onClick={null}
                        >
                            {label}
                        </Link>
                        // <Link to={link} key={key} ref={ref} className={className} onClick={null}>{label}</Link>
                        
                    ))
                }
                <div
                    className="active-box"
                    ref={activeBox}
                ></div>
            </nav>
    )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar;
