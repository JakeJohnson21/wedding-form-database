import React from "react";
import Post from "../Post/Post";

function AdventureContent({ items }) {
  return (
    <section className="sub-main">
      {items.map((item) => (
        <Post
          key={item.data.id}
          name={item.data.name}
          address={item.data.address}
          description={item.data.description}
          url={item.data.url}
          price={item.data.price}
          attire={item.data.attire}
        />
      ))}
    </section>
  );
}

export default ExploreContent;
