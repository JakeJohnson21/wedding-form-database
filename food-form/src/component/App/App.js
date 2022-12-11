// import { useEffect, useState } from "react";
import FoodForm from "../FoodForm/FoodForm";
import PlayForm from "../PlayForm";
import StayForm from "../StayForm";
import "./App.css";
import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <div className="page">
      <div className="app">
        <nav className="nav">
          <Link to="/food" className="nav__link">
            <button className="nav__button">Restaurant</button>
          </Link>
          <Link to="/stay" className="nav__link">
            <button className="nav__button">Hotel</button>
          </Link>
          <Link to="/play" className="nav__link">
            <button className="nav__button">Explore</button>
          </Link>
        </nav>
        <Routes>
          <Route
            path="/food"
            name="food"
            element={<FoodForm encode={encode} />}
          />
          <Route
            path="/stay"
            name="stay"
            element={<StayForm encode={encode} />}
          />
          <Route
            path="/play"
            name="play"
            element={<PlayForm encode={encode} />}
          />
        </Routes>

        <div className="post__content"></div>
      </div>
    </div>
  );
}

export default App;
