import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons';
import { MdFingerprint } from 'react-icons/lib';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="nabar-logo">
                        <MdFingerprint className="navbar-icon" />
                        TURSUNJON
                    </Link>
                    <div className="menu-icon">
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-links">
                                Product
                            </Link>
                        </li>
                        <li className="nav-btn">
                    {button?(
                        <Link to="/sign-up" className="btn-link">
                        <Button buttonStyle="btn--outline">
                        SIGN UP
                        </Button>
                        </Link>
                    ): (
                        <Link to="/sign-up" className="btn-link">
                        <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                        SIGN UP
                        </Button>
                        </Link>
                    )}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};


export default Navbar;