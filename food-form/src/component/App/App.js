// import { useEffect, useState } from "react";
import FoodForm from "../FoodForm/FoodForm";
import PlayForm from "../PlayForm";
import StayForm from "../StayForm";
import "./App.css";
<<<<<<< HEAD
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const baseURL = "https://api.netlify.com/api/v1";
  const [restaurants, setRestaurants] = useState([]);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const getSubmissions = (formId) => {
    fetch(`/${baseURL}/forms/${formId}/submissions`);
    setRestaurants(getSubmissions("restaurants"));
  };

  console.log(restaurants);
=======
import { useState } from "react";

import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  const [dataArray, setDataArray] = useState([]);

>>>>>>> forms-working
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
<<<<<<< HEAD
            element={<FoodForm encode={encode} />}
=======
            element={<FoodForm dataArray={dataArray} setData={setDataArray} />}
>>>>>>> forms-working
          />
          <Route
            path="/stay"
            name="stay"
<<<<<<< HEAD
            element={<StayForm encode={encode} />}
=======
            element={<StayForm dataArray={dataArray} setData={setDataArray} />}
>>>>>>> forms-working
          />
          <Route
            path="/play"
            name="play"
<<<<<<< HEAD
            element={<PlayForm encode={encode} />}
          />
=======
            element={<PlayForm dataArray={dataArray} setData={setDataArray} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
>>>>>>> forms-working
        </Routes>

        <div className="post__content"></div>
      </div>
    </div>
  );
}

export default App;
