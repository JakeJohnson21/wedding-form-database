import { useState, useEffect } from "react";

function Api({ formId, name, money, optional, click }) {
  const [dataArray, setDataArray] = useState([]);

  const deletePost = async (post_id) => {
    const deleteRequest = await fetch(
      `https://api.netlify.com/api/v1/submissions/${post_id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer qFvLqEc18lXXWwYCViV9rJ_PqraDwQA8vjE2bNfAQLc",
          "Content-Type": "application/json",
        },
      }
    );
    try {
      alert("Success! reload the page to refresh list");
      const filtered = dataArray.filter((item) => item.id !== post_id);
      const deleted = dataArray.filter((item) => item.id === post_id);
      await filtered;
      return deleted;
    } catch (err) {
      console.error(`Error: ${err.status}`);
      alert("Request failed. Tell Jake.");
    }
  };
  useEffect(() => {
    const populateData = async () => {
      const get = await fetch(
        `https://api.netlify.com/api/v1/forms/${formId}/submissions`,
        {
          headers: {
            Authorization: "Bearer qFvLqEc18lXXWwYCViV9rJ_PqraDwQA8vjE2bNfAQLc",
            "Content-Type": "application/json",
          },
        }
      );
      const response = await get.json();
      setDataArray(response);
    };
    populateData();
  }, [click]);

  console.log(dataArray);

  return (
    <div className="best-post__wrapper">
      {dataArray.map((item) => (
        <div className="best-post" key={item.id}>
          <div className="trash-icon" onClick={() => deletePost(item.id)}></div>
          <label className="best-post-label">
            {name}
            <p className="best-post-text">{item.data.name}</p>
          </label>
          <label className="best-post-label">
            Address:
            <p className="best-post-text">{item.data.address}</p>
          </label>

          <label className="best-post-label">
            Website URL:
            <p className="best-post-text">{item.data.url}</p>
          </label>
          <label className="best-post-label">
            Description:
            <p className="best-post-text">{item.data.description}</p>
          </label>
          <label className="best-post-label">
            {money}
            {money === "Price range:" ? (
              <p className="best-post-text">{item.data.price}</p>
            ) : (
              <p className="best-post-text">{item.data.cost}</p>
            )}
          </label>
          <label className="best-post-label">
            {optional}
            {(() => {
              if (optional === "Attire:") {
                return <p className="best-post-text">{item.data.attire}</p>;
              } else if (optional === "Distance from venue:") {
                return <p className="best-post-text">{item.data.distance}</p>;
              } else {
              }
            })()}
          </label>
        </div>
      ))}
    </div>
  );
}
export default Api;
