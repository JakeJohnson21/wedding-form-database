import { Link } from "react-router-dom";
import React from "react";
function Nav() {
  return (
    <div className="nav__wrapper">
      <span className={"nav__button-wrapper_home"}>
        <Link className="nav__link" to="/">
          <button className={"nav__button"}>Home</button>
        </Link>
        <Link className="nav__link" to="/explore">
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
