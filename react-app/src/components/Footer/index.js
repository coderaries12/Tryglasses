import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./footer.css";

function Footer({ isLoaded }) {
  return (
    <div className="footer">
      <div className="about">
        <div className="about-grid-one">
          <div>
            <p>Sheena Gupta</p>
            <a href="https://github.com/coderaries12" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sheena1204/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        {/* <div className="icon-inspire"> */}
        <div>
          <p className="made-with">
            <i className="fa-regular fa-copyright"></i>2023 TryGlasses inspired by GlassesUSA
          </p>
        </div>
        <div>
          <p>Made with:</p>
          <div className="madeIcons">
            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-square-js"></i>
            <i className="fa-brands fa-python"></i>
          </div>
        </div>
      </div>
      </div>
    // </div>
  );
}

export default Footer;
