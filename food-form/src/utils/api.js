const API_ENDPOINT = "http://localhost:3080";

export const getRestaurant = async () => {
  const response = await fetch(`${API_ENDPOINT}/restaurants`);
  try {
    return response.json();
  } catch (e) {
    return console.error("Error: ", e.status);
  }
};

export const getHotel = async () => {
  const response = await fetch(`${API_ENDPOINT}/hotels`);
  try {
    return response.json();
  } catch (e) {
    return console.error("Error: ", e.status);
  }
};

export const getAdventure = async () => {
  const response = await fetch(`${API_ENDPOINT}/adventures`);
  try {
    return response.json();
  } catch (e) {
    return console.error("Error: ", e.status);
  }
};

export const addRestaurant = ({
  name,
  address,
  url,
  description,
  price,
  attire,
}) => {
  fetch(`${API_ENDPOINT}/restaurants`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      address,
      url,
      description,
      price,
      attire,
    }),
  }).then((res) => {
    if (!res.ok) {
      return `Error: ${res.status}`;
    }
    return res.json();
  });
};

export const addHotel = ({
  name,
  address,
  url,
  description,
  price,
  distance,
}) => {
  fetch(`${API_ENDPOINT}/hotels`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, address, url, description, price, distance }),
  }).then((res) => {
    if (!res.ok) {
      return `Error: ${res.status}`;
    }
    return res.json();
  });
};

export const addAdventure = ({ name, address, url, description, cost }) => {
  fetch(`${API_ENDPOINT}/adventures`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      address,
      url,
      description,
      cost,
    }),
  }).then((res) => {
    if (!res.ok) {
      return `Error: ${res.status}`;
    }
    return res.json();
  });
};

export const deletePost = async (postId) => {
  const response = await fetch(`${API_ENDPOINT}//${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  try {
    return await response.json();
  } catch (e) {
    console.log("Error: ", e.status);
  }
};

// export const addRestaurant = ({
//   name,
//   address,
//   url,
//   description,
//   price,
//   attire,
// }) => {
//   console.log("api hit");
//   console.log("API-DATA: ", name, address, url, description, price, attire);

//   fetch(`${API_ENDPOINT}/restaurants`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name,
//       address,
//       url,
//       description,
//       price,
//       attire,
//     }),
//   }).then((res) => {
//     if (!res.ok) {
//       return `Error: ${res.status}`;
//     }
//     return res.json();
//   });
// };

// export const addHotel = ({
//   name,
//   address,
//   url,
//   description,
//   price,
//   distance,
// }) => {
//   fetch(`${API_ENDPOINT}/hotels`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, address, url, description, price, distance }),
//   }).then((res) => {
//     if (!res.ok) {
//       return `Error: ${res.status}`;
//     }
//     return res.json();
//   });
// };

// export const addAdventure = ({ name, address, url, description, cost }) => {
//   fetch(`${API_ENDPOINT}/adventures`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name,
//       address,
//       url,
//       description,
//       cost,
//     }),
//   }).then((res) => {
//     if (!res.ok) {
//       return `Error: ${res.status}`;
//     }
//     return res.json();
//   });
// };
