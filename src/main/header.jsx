/** code shortcut to write react code template: type 'rafc' then enter */

import { Link } from 'react-router-dom';
import Navbar from "./navigation"

{/* <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to bg-zinc-900/0"> */}

const Header = () => {
    return (
        <header>
            <h1>
                <Link to="/" className="logo">
                    <img 
                        src="./images/logo-header.svg"
                        width={30} 
                        height={30} 
                        alt="Luis Baptista" 
                    />
                </Link>
            </h1>
            <Navbar />
        </header>
    )
}

export default Header
