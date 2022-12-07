// import { useEffect, useState } from "react";
import FoodForm from "../FoodForm/FoodForm";
import PlayForm from "../PlayForm";
import StayForm from "../StayForm";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="page">
      {/* <StayForm onStayFormSubmit={handleAddNewHotel} /> */}
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
        <form name="restaurants" data-netlify="true" hidden>
          <input type="hidden" name="restaurants" value="restaurants" />
          <input type="hidden" name="name" />
          <input type="hidden" name="address" />
          <input type="hidden" name="url" />
          <textarea type="hidden" name="description" />
          <input type="hidden" name="price" />
          <input type="hidden" name="attire" />
        </form>
        <form name="hotels" data-netlify="true" hidden>
          <input type="hidden" name="hotels" value="hotels" />
          <input type="hidden" name="name" />
          <input type="hidden" name="address" />
          <input type="hidden" name="url" />
          <textarea type="hidden" name="description" />
          <input type="hidden" name="price" />
          <input type="hidden" name="distance" />
        </form>
        <form name="adventures" data-netlify="true" hidden>
          <input type="hidden" name="adventures" value="adventures" />
          <input type="hidden" name="name" />
          <input type="hidden" name="address" />
          <input type="hidden" name="url" />
          <textarea type="hidden" name="description" />
          <input type="hidden" name="cost" />
        </form>
        <div className="post__content">
          {/* {restaurantList.map((item) => (
          <div className="post" key={item._id}>
            <button
              onClick={() => {
                handleDeleteEntry(item._id);
              }}
            >
              X
            </button>
            <label>
              id
              <p>{item._id}</p>
            </label>
            <label>
              restaurant
              <p>{item.name}</p>
            </label>
            <label>
              address
              <p>{item.address}</p>
            </label>
            <label>
              URL
              <p>{item.url}</p>
            </label>
            <label>
              description
              <p>{item.description}</p>
            </label>
            <label>
              $ range
              <p>{item.price}</p>
            </label>
            <label>
              Attire \(casual / formal\)
              <p>{item.attire}</p>
            </label>
          </div>
        ))} */}
        </div>
      </div>
    </div>
  );
}

export default App;

// API functions for backend

//  const [restaurantList, setRestaurantList] = useState([]);

// const handleAddNewRestaurant = async (data) => {
//   try {
//     const newRestaurant = await addRestaurant(data);
//     return newRestaurant;
//   } catch (err) {
//     console.log(`ERROR: ${err}`);
//   }
// };

// const handleDeleteEntry = async (postId) => {
//   try {
//     const checkIfContains = await restaurantList.includes(postId);
//     if (checkIfContains) {
//       const removePost = await deletePost(postId);
//       await setRestaurantList((currentList) => {
//         return currentList.filter(removePost);
//       });
//     }
//   } catch (e) {
//     return console.error("error: ", e);
//   }
// };

// const getRestaurantList = async () => {
//   const restaurantData = await getRestaurant();
//   await console.log("restaurantData", restaurantData);
//   await setRestaurantList(restaurantData);
// };

// useEffect(() => {
//   getRestaurantList();
// }, []);
