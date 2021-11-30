import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            {/* Header desktop */}
            <div className="container-menu-desktop fix-menu-desktop">
                <div className="wrap-menu-desktop">
                    <nav className="limiter-menu-desktop container">
                        {/* Logo desktop */}

                        <Link href="/">
                            <a className="logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="41.5" viewBox="0 0 89 37">
                                    <path fill="#6c7ae0" id="ipic_logo" className="st0" d="M0,36.1h6.7V0.2L0,1.5V36.1z M33.3,12.2c0,3.6-1.9,5.1-5,5.1h-8.1V7h8.1C31.4,7,33.3,8.6,33.3,12.2 M40,12.2   c0-6.9-4.3-11.4-11.7-11.4H13.5v35.4h6.7V23.5h8.3C35.5,23.5,40,18.7,40,12.2 M45.4,36.1h6.7V0.8h-6.7V36.1z M89.3,7.3   C86.4,2.7,81.4,0,75.2,0c-9.6,0-17.1,8.1-17.1,18.4s7.5,18.4,17.1,18.4c6.1,0,11.1-2.8,14.1-7.5l-5.4-4c-1.6,3-4.8,5.4-8.6,5.4   c-5.8,0-10.4-5.6-10.4-12.3c0-6.7,4.6-12.3,10.4-12.3c3.9,0,6.9,2.2,8.6,5.2L89.3,7.3z"/>
                                </svg>
                                <span>&reg;</span>
                            </a>
                        </Link>
                        
                        {/* Menu desktop */}
                        <div className="menu-desktop">
                            <ul className="main-menu">
                                <li className="active-menu">
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        
            {/* Header Mobile */}
            <div className="wrap-header-mobile">
                {/* Logo mobile */}
                <div className="logo-mobile">
                    <Link href="/">
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="41.5" viewBox="0 0 89 37">
                                <path fill="#6c7ae0" id="ipic_logo" className="st0" d="M0,36.1h6.7V0.2L0,1.5V36.1z M33.3,12.2c0,3.6-1.9,5.1-5,5.1h-8.1V7h8.1C31.4,7,33.3,8.6,33.3,12.2 M40,12.2   c0-6.9-4.3-11.4-11.7-11.4H13.5v35.4h6.7V23.5h8.3C35.5,23.5,40,18.7,40,12.2 M45.4,36.1h6.7V0.8h-6.7V36.1z M89.3,7.3   C86.4,2.7,81.4,0,75.2,0c-9.6,0-17.1,8.1-17.1,18.4s7.5,18.4,17.1,18.4c6.1,0,11.1-2.8,14.1-7.5l-5.4-4c-1.6,3-4.8,5.4-8.6,5.4   c-5.8,0-10.4-5.6-10.4-12.3c0-6.7,4.6-12.3,10.4-12.3c3.9,0,6.9,2.2,8.6,5.2L89.3,7.3z"/>
                            </svg>
                            <span>&reg;</span>
                        </a>
                    </Link>
                </div>
        
                {/* Button show menu */}
                <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </div>
            </div>
        
        
            {/* Menu Mobile */}
            <div className="menu-mobile">
                <ul className="main-menu-m">
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
 
export default Header;