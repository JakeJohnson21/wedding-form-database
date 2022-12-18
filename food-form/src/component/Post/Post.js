function Post({ name, address, url, description, price, attire }) {
  return (
    <div className="post">
      <div className="post-box post__top">
        <h2 className="post__name" id="name">
          {name}
        </h2>
        <p className=" post__sub" id="description">
          {description}
        </p>
      </div>
      <div className="post-sm-boxes">
        <div className="post-box post__middle">
          <a href={url} className="post__url" id="url">
            Visit Website
          </a>
          <p className="post__sub" id="address">
            {address}
          </p>
        </div>
        <div className="post-box post__bottom">
          <p className="post__sub" id="price">
            {price}
          </p>
          <p className="post__sub" id="attire">
            {attire}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Post;
