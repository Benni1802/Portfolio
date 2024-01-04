import { FunctionComponent } from "react";
import "./Navbar.css";

const Navbar: FunctionComponent = () => {
  return (
    <div className="navbar1">
      <div className="navbar-links">
        <div className="links">
          <a className="about-me">About me</a>
          <a className="about-me">Game Development</a>
          <a className="about-me">Computer Graphics</a>
        </div>
        <a className="home-app-logo">
          <img
            className="home-app-logo-icon"
            alt=""
            src="/home-app-logo@2x.png"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
