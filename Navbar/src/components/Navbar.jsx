import React, { useState } from 'react';

const Navbar = () => {
    const [navLinkOpen, navLinkToggle] = useState(false)
    const handleNavLinksToggle = () => {
        navLinkToggle(!navLinkOpen);
    }

    const renderClasses = () => {
        let classes = "nav-links";
        if(!navLinkOpen){
            classes += " hide";
        }
        return classes
    }

    return (
        <nav>
            <a href="" className="logo">Brand-Logo</a>
            <button onClick={handleNavLinksToggle} className="hamburger-toggle">
                <i className="fas fa-bars fa-lg"></i>
            </button>
            <div className={renderClasses()}>
                <a href="" className="link">Home</a>
                <a href="" className="link">Blog</a>
                <a href="" className="link">About Us</a>
                <a href="" className="link">Contact Us</a>
                
            </div>
        </nav>
    )  
}

export default Navbar;