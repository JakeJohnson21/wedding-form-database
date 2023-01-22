import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

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
      <section className="explore__pages">
        <Routes>
          <Route
            path="/eat"
            name="eat"
            element={<ExploreContent items={eat} />}
          />

          <Route
            path="/stay"
            name="stay"
            element={<ExploreContent items={stay} />}
          />

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
