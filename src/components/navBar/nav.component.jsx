

import React from "react";

import {Link} from "react-router-dom";

import "../navBar/_nav.styles.scss";//styles








const NavBar = () => {

    return (

        <nav>
            <h1 ><Link id="logo" to="/">Capture</Link></h1>

            <ul className="navLinks">

                <li><Link to="/">About Us</Link></li>
                <li><Link to="/work">Our Work</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>

            </ul>
        </nav>
    )
}

export default NavBar;