import React from "react";
import "./NavBar.css"
const NavBar =() => {
    return(
        <div className="navbar">
            <span className="nav-logo">JidQuizApp</span>
            <div className="nav-items">
                <a href="/home"></a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div className="nav-toggle">
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default NavBar