import { Link } from "react-router-dom";
import React from "react";
function Nav({ page }) {
  return (
    <div className="nav__wrapper">
      <span className={"nav__button-wrapper_home"}>
        <Link className="nav__link" to="/">
          <button
            className={`nav__button ${
              page === "/" ? "nav__button_active" : ""
            }`}
          >
            Home
          </button>
        </Link>
        <Link className="nav__link" to="/explore">
          <button
            className={`nav__button ${
              page === "/explore" ? "nav__button_active" : ""
            }`}
          >
            Explore
          </button>
        </Link>
        <Link className="nav__link" to="/answers">
          <button
            className={`nav__button ${
              page === "/answers" ? "nav__button_active" : ""
            }`}
          >
            Q&A
          </button>
        </Link>
        <Link className="nav__link" to="rsvp">
          <button
            className={`nav__button ${
              page === "/rsvp" ? "nav__button_active" : ""
            }`}
          >
            RSVP
          </button>
        </Link>
        <Link className="nav__link" to="/registry">
          <button
            className={`nav__button ${
              page === "/registry" ? "nav__button_active" : ""
            }`}
          >
            Registry
          </button>
        </Link>
      </span>
    </div>
  );
}

export default Nav;
