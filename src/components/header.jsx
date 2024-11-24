/** code shortcut to write react code template: type 'rafc' then enter */


import Home from '../pages/home';
/**
 * Node Modules
 */

import { useState } from "react";

/**
 * Components
 */
import Navbar from "./navbar"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const URI = window.location.origin;
    // const myLogo = `${URI}/images/logo.svg`
    return (
        <>
            <header className="w-full flex items-center">
            {/* <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to bg-zinc-900/0"> */}
                <div className="w-full mx-auto flex justify-between items-center">

                    <h1 className="relative md:justify-self-center">
                        
                            <a 
                            href="/luisbaptista/home" 
                            className="logo"
                            >
                                <img 
                                    src="/luisbaptista/images/logo.svg"
                                    // src={`${URI}/images/logo.svg`}
                                    width={30} 
                                    height={30} 
                                    alt="Luis Baptista" 
                                />

                            </a>
                            
                        {/* <small className="absolute bottom-0 px-10"><span>luis</span><span>baptista</span></small> */}
                    </h1>

                    <div className="relative md:justify-self-center">
                        
                        <button 
                            className="menu-btn md:hidden" 
                            onClick={null}
                        >
                            <span className="material-symbols-rounded">
                                menu
                            </span>
                        </button>
                        
                        <Navbar navOpen={navOpen} />
                    </div>

                    <p className="max-md:hidden md:justify-self-end"><small href="#status">Open to work</small></p>

                    
                </div>
            </header>

            
        </>
    )
}

export default Header
