import { useEffect, useMemo, useState } from "react";

function GuestList() {
  const [guests, setGuests] = useState([]);

  useMemo(() => {
    const populateGuests = async () => {
      const get = await fetch(
        `https://api.netlify.com/api/v1/forms/6405a2041f961b0008fbe776/submissions`,
        {
          headers: {
            Authorization: "Bearer qFvLqEc18lXXWwYCViV9rJ_PqraDwQA8vjE2bNfAQLc",
            "Content-Type": "application/json",
          },
        }
      );
      const response = await get.json();
      setGuests(response);
    };
    populateGuests();
  }, []);
  console.log(guests);

  return (
    <section className="page">
      <h2 className="guest__heading">Guest List</h2>
      {guests.map((item) => {
        <div className="guest__wrapper" key={item.id}>
          <label>
            Name:
            <p className="guest__text"> Hello {item.data.name}</p>
          </label>
          <label>
            Attending:
            <p className="guest__text">{item.data.attending}</p>
          </label>
          <label>
            Entree:
            <p className="guest__text">{item.data.entree}</p>
          </label>
          <label>
            Notes:
            <p className="guest__text">{item.data.notes}</p>
          </label>
        </div>;
      })}
    </section>
  );
}

export default GuestList;
