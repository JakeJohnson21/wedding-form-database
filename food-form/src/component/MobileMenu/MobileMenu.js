import { Link } from "react-router-dom";
import React from "react";
function MobileMenu({ isOpen }) {
  const mobileNavWrapperClass = ` ${
    isOpen ? "mobile__nav_open" : "mobile__nav_wrapper"
  }`;

  return (
    <div className="mobile__nav_wrapper">
      <span className={mobileNavWrapperClass}>
        <Link className="mobile__nav_link" to="/">
          <button className="mobile__nav_button">Home</button>
        </Link>
        <Link className="mobile__nav_link" to="/explore/adventure">
          <button className="mobile__nav_button">Explore</button>
        </Link>
        <Link className="mobile__nav_link" to="/answers">
          <button className="mobile__nav_button">Answers</button>
        </Link>
        <Link className="mobile__nav_link" to="/our-story">
          <button className="mobile__nav_button">Our Story</button>
        </Link>
        <Link className="mobile__nav_link" to="rsvp">
          <button className="mobile__nav_button">RSVP</button>
        </Link>
        <Link className="mobile__nav_link" to="/registry">
          <button className="mobile__nav_button">Registry</button>
        </Link>
      </span>
    </div>
  );
}

export default MobileMenu;
