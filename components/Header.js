import React from 'react';

const Header = () => {
    return (
        <header>
            {/* Header desktop */}
            <div className="container-menu-desktop fix-menu-desktop">
                <div className="wrap-menu-desktop">
                    <nav className="limiter-menu-desktop container">
                        {/* Logo desktop */}
                        <a href="index.html" className="logo">
                            <img src="/images/icons/logo-01.png" alt="IMG-LOGO" />
                        </a>
        
                        {/* Menu desktop */}
                        <div className="menu-desktop">
                            <ul className="main-menu">
                                <li className="active-menu">
                                    <a href="index.html">Home</a>
                                </li>
        
                                <li>
                                    <a href="movies.html">Movies</a>
                                </li>
        
                                <li>
                                    <a href="contact.html">Contact</a>
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
                    <a href="index.html"><img src="/images/icons/logo-01.png" alt="IMG-LOGO" /></a>
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
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="movies.html">Movies</a>
                    </li>
        
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
 
export default Header;