import React, { useEffect, useState } from "react";
import "./NavBar.css"

const NavBar = () => {
    const[show,setShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                setShow(true);
            }
            else {
                setShow(false);
            }
        });

    },[])
    return (
        <div className={`nav ${show && "nav-change"}`}>
            <img
            className="nav-logo"
            src="https://www.egypttoday.com/siteimages/Larg/53845.jpg"
            alt="Netflix Logo"
            />
            <img 
            className="nav-avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Proflie logo"
            />
        </div>
    );
}

export default NavBar;