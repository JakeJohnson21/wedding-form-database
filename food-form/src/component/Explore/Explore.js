import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import ExploreContent from "../ExploreContent/ExploreContent";

function Explore({ eat, stay, play }) {
  return (
    <section className="page__content">
      <nav className="sub__nav">
        <Link className="sub__link" to="/explore/eat">
          <button className="sub__nav_button">Eat</button>
        </Link>
        <Link className="sub__link" to="/explore/stay">
          <button className="sub__nav_button">Stay</button>
        </Link>
        <Link className="sub__link" to="/explore/adventure">
          <button className="sub__nav_button">Adventure</button>
        </Link>
      </nav>
      <Routes>
        <Route
          path="/explore/eat"
          name="eat"
          element={<ExploreContent item={eat} />}
        />

        <Route
          path="/explore/stay"
          name="stay"
          element={<ExploreContent item={stay} />}
        />

        <Route
          path="/explore/adventure"
          name="play"
          element={<ExploreContent item={play} />}
        />
      </Routes>
    </section>
  );
}

export default Explore;
