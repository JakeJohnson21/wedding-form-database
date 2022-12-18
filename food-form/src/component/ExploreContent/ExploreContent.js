import React from "react";
import Post from "../Post/Post";

function ExploreContent({ item }) {
  return (
    <section className="sub-main">
      {item.map((item, index) => (
        <Post
          key={index}
          name={item.name}
          address={item.address}
          description={item.description}
          url={item.url}
          price={item.price}
          attire={item.attire}
        />
      ))}
    </section>
  );
}

export default ExploreContent;
