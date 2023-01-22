import { Link } from "react-router-dom";
import React from "react";
function MobileMenu({ isOpen, onClose }) {
  const mobileNavWrapperClass = `mobile__nav_wrapper ${
    isOpen ? "mobile__nav_open" : "mobile__nav_closed"
  }`;

  return (
    <div className={mobileNavWrapperClass}>
      <span className="mobile__nav-box">
        <Link className="mobile__nav_link" to="/">
          <button className="mobile__nav_button" onClick={onClose}>
            Home
          </button>
        </Link>
        <Link className="mobile__nav_link" to="/explore/adventure">
          <button className="mobile__nav_button" onClick={onClose}>
            Explore
          </button>
        </Link>
        <Link className="mobile__nav_link" to="/answers">
          <button className="mobile__nav_button" onClick={onClose}>
            Answers
          </button>
        </Link>
        <Link className="mobile__nav_link" to="/our-story">
          <button className="mobile__nav_button" onClick={onClose}>
            Our Story
          </button>
        </Link>
        <Link className="mobile__nav_link" to="rsvp">
          <button className="mobile__nav_button" onClick={onClose}>
            RSVP
          </button>
        </Link>
        <Link className="mobile__nav_link" to="/registry">
          <button className="mobile__nav_button" onClick={onClose}>
            Registry
          </button>
        </Link>
      </span>
    </div>
  );
}

export default MobileMenu;
