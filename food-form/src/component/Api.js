import { useState, useEffect } from "react";

function Api({ formId, name, money, optional }) {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const populateData = async () => {
      const get = await fetch(
        `https://v1.nocodeapi.com/jakejohnson/netlify/CWwIQhITDuRgHSuk/listFormSubmissions?form_id=${formId}&per_page=20`
      );
      const response = await get.json();
      setDataArray(response);
    };
    populateData();
  }, []);

  return (
    <div className="post__wrapper">
      {dataArray.map((item) => (
        <div className="post" key={item.id}>
          <label className="post-label">
            {name}
            <p className="post-text">{item.data.name}</p>
          </label>
          <label className="post-label">
            Address:
            <p className="post-text">{item.data.address}</p>
          </label>

          <label className="post-label">
            Website URL:
            <p className="post-text">{item.data.url}</p>
          </label>
          <label className="post-label">
            Description:
            <p className="post-text">{item.data.description}</p>
          </label>
          <label className="post-label">
            {money}
            {money === "price" ? (
              <p className="post-text">{item.data.price}</p>
            ) : (
              <p className="post-text">{item.data.cost}</p>
            )}
          </label>
          <label className="post-label">
            {(() => {
              if (optional === "Attire:") {
                return <p className="post-text">{item.data.attire}</p>;
              } else if (optional === "Distance from venue:") {
                return <p className="post-text">{item.data.distance}</p>;
              } else {
                return;
              }
            })()}
          </label>
        </div>
      ))}
    </div>
  );
}
export default Api;
