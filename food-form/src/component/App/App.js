// import { useEffect, useState } from "react";
// import FoodForm from "../FoodForm/FoodForm";
import NetlifyForm from "../NetlifyForm/NetlifyForm";
import "./App.css";

function App() {
  // const encode = (data) => {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // };

  return (
    <div className="App">
      {/* <StayForm onStayFormSubmit={handleAddNewHotel} /> */}
      {/* <FoodForm encode={encode} /> */}
      <NetlifyForm />
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
