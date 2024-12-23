import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo3 from "../assets/LOGO3.png";
import wipro from "../assets/wipro.svg";
import logo4 from '../assets/poplogo/4logo.png'

import iso from "../assets/poplogo/iso.png";
import aicte from "../assets/poplogo/aicte.png";
import mca from "../assets/poplogo/mcalogo.png";
import msme from "../assets/poplogo/msme3.jpeg";

const Header = () => {
  const [isMobileVisible, setisMobileVisible] = useState(false);
  const [isAutopopupVisible, setisAutopopupVisible] = useState(false);
  // Create a ref for the mobile menu
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    // Set the div to be visible after 3 seconds
    const timer = setTimeout(() => {
      setisAutopopupVisible(true);
    }, 1000); // 3000 milliseconds = 3 seconds

    // Cleanup the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  const autoPopup = () => {
    setisAutopopupVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleVisibility = () => {
    setisMobileVisible((prevState) => !prevState);
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setisMobileVisible(false);
      }
    };

    // Add event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div id="header" ref={mobileMenuRef}>
      <div className="navbar">
        <div>
          <Link to="/" onClick={scrollToTop}>
            <img src={logo3} alt="Logo" />
          </Link>
        </div>
        <div className="menu">
          <Link to="/Mentorship">MENTORSHIP PROGRAM</Link>
          <Link to="/Advance">ADVANCED PROGRAM</Link>
          <Link to="/Collabration" onClick={scrollToTop}>
            COLLABRATION
          </Link>
          <Link to="/TalentHunt" onClick={scrollToTop}>
            TALENT HUNT
          </Link>
          <Link to="/Login" onClick={scrollToTop} className="btn">
            <button>LOGIN</button>
          </Link>
        </div>
        <div className="toggle">
          <span onClick={toggleVisibility}>☰</span>
        </div>
      </div>

      {isMobileVisible && (
        <div className="mobile">
          <ul onClick={toggleVisibility}>
            <Link to="/Mentorship">
              <li>MENTORSHIP PROGRAM</li>
            </Link>
            <Link to="/Advance">
              <li>ADVANCED PROGRAM</li>
            </Link>
            <Link to="/Collabration" onClick={scrollToTop}>
              <li>COLLABRATION</li>
            </Link>
            <Link to="/TalentHunt" onClick={scrollToTop}>
              <li>TALENT HUNT</li>
            </Link>
            <Link to="/ContactUs" onClick={scrollToTop}>
              <li>Contact US</li>
            </Link>
            <Link to="/Career" onClick={scrollToTop}>
              <li>Career</li>
            </Link>
            <Link to="/AboutUs" onClick={scrollToTop}>
              <li>About Us</li>
            </Link>
            <Link
            to="/Login"
            onClick={() => {
              scrollToTop();
              toggleVisibility();
            }}
          >
           <li><button className="btn">LOGIN</button></li>
          </Link>
          </ul>
         
        </div>
      )}

{isAutopopupVisible && (
        <div id="autopopup">
          <div className="autotext">
            <div className="close">
              <span onClick={autoPopup} class="fa fa-close"></span>
            </div>
            <h1>Revealing our estimated</h1>
            <div className="first">
              <h2>Our Credential Partner</h2>
              <img src={wipro} alt="wipro" />
            </div>
            <h3>Our Other Certifcation partner</h3>
            <div className="second">
             <img src={logo4} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

{
  /* <li>
  <Link to='/Login' onClick={() => { scrollToTop(); solution(); }} className='btn'>
    LOGIN
  </Link>
</li> */
}
