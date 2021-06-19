import React from "react";
import "./style.css";
import {FaGithub, FaLinkedin} from "react-icons/fa";

const handleURL = (url) => {
  return () => window.open(url, "_blank")
}

function Footer() {
  return (
    <footer className="footer">
      <h6>React Portfolio 2021</h6>
       <div>
          <h1 className="text-center">Contact Me!</h1>
          <div className="text-center">
              <FaGithub color='black'  size='75px' 
              onClick={handleURL('https://github.com/Jess20005')}/>
              <FaLinkedin color='black' size='75px'
               onClick={handleURL('https://www.linkedin.com/in/jessica-gibbs-395b78203/')}/>
          </div>
       </div>
    </footer>
  );
  
}

export default Footer;
