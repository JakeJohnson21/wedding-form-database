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
      const filtered = dataArray.filter((item) => item.id !== post_id);
      const deleted = dataArray.filter((item) => item.id === post_id);
      await filtered;
      return deleted;
    } catch (err) {
      console.error(`Error: ${err.status}`);
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
    <div className="post__wrapper">
      {dataArray.map((item) => (
        <div className="post" key={item.id}>
          <div className="trash-icon" onClick={() => deletePost(item.id)}></div>
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
