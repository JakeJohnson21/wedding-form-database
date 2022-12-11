// import { useEffect, useState } from "react";
import FoodForm from "../FoodForm/FoodForm";
import PlayForm from "../PlayForm";
import StayForm from "../StayForm";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
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
          <Route path="/food" name="food" element={<FoodForm />} />
          <Route path="/stay" name="stay" element={<StayForm />} />
          <Route path="/play" name="play" element={<PlayForm />} />
        </Routes>

        <div className="post__content"></div>
      </div>
    </div>
  );
}

export default App;
