import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import StayInfo from "../StayInfo/StayInfo";
import ExploreContent from "../ExploreContent/ExploreContent";

function Explore({ eat, play, page }) {
  return (
    <section className="page__content">
      <nav className="sub__nav">
        <Link className="sub__link" to="/explore/">
          <button
            className={`sub__nav_button ${
              page === "/explore/" ? "sub__nav_button_active" : ""
            }`}
          >
            Eat
          </button>
        </Link>
        <Link className="sub__link" to="/explore/stay">
          <button
            className={`sub__nav_button ${
              page === "/explore/stay" ? "sub__nav_button_active" : ""
            }`}
          >
            Stay
          </button>
        </Link>
        <Link className="sub__link" to="/explore/adventure">
          <button
            className={`sub__nav_button ${
              page === "/explore/adventure" ? "sub__nav_button_active" : ""
            }`}
          >
            Adventure
          </button>
        </Link>
      </nav>
      <section className="explore__pages">
        <Routes>
          <Route path="/" name="eat" element={<ExploreContent items={eat} />} />

          <Route path="/stay" name="stay" element={<StayInfo />} />

          <Route
            path="/adventure"
            name="play"
            element={<ExploreContent items={play} />}
          />
          {/* <Route path="*" element={<Navigate to="/eat" replace />} /> */}
        </Routes>
      </section>
    </section>
  );
}

export default Explore;
