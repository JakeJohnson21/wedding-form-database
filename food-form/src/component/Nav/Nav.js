import { Link } from "react-router-dom";
import React from "react";
function Nav() {
  // const navButtonWrapperClass = `nav__button-wrapper ${
  //   page === "/" ? "nav__button-wrapper_home" : "nav__button-wrapper_sub"
  // }`;

  // const navButtonClass = `nav__button ${
  //   page === "/" ? "nav__button_home" : "nav__button_sub"
  // }`;
  return (
    <div className="nav__wrapper">
      <span className={"nav__button-wrapper_home"}>
        <Link className="nav__link" to="/">
          <button className={"nav__button"}>Home</button>
        </Link>
        <Link className="nav__link" to="/explore/adventure">
          <button className={"nav__button"}>Explore</button>
        </Link>
        <Link className="nav__link" to="/answers">
          <button className={"nav__button"}>Answers</button>
        </Link>
        <Link className="nav__link" to="/our-story">
          <button className={"nav__button"}>Our Story</button>
        </Link>
        <Link className="nav__link" to="rsvp">
          <button className={"nav__button"}>RSVP</button>
        </Link>
        <Link className="nav__link" to="/registry">
          <button className={"nav__button"}>Registry</button>
        </Link>
      </span>
    </div>
  );
}

export default Nav;
