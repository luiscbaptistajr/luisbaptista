import { useRef } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import About from '../pages/about';
import Design from '../pages/design';
import Development from '../pages/dev';

const Navbar = () => {

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
          label: 'Dev Works',
          link: '/development',
          className: 'nav-link'
        }
    ];
  
    return (
        <nav className={'navbar'}>
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
                ))
            }
        </nav>
    )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar;
