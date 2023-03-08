import React, { useState } from "react";

function Post({ name, address, url, description, price, attire }) {
  const [isItemDataOpen, setIsItemDataOpen] = useState(false);

  function handleItemToggle() {
    setIsItemDataOpen(!isItemDataOpen);
  }

  const accordionButton = `accordion-item__button ${
    isItemDataOpen
      ? "accordion-item__button_open"
      : "accordion-item__button_closed"
  }`;
  const accordionItemData = `${
    isItemDataOpen ? "accordion-item__data" : "accordion-item__data_hidden"
  }`;
  const dividerClassName = `${isItemDataOpen ? "accordion-divider" : ""}`;
  const accordionTextContent = `${
    isItemDataOpen ? "accordion__text_visible" : "accordion__text_hidden"
  }`;
  const openIcon = ` down-to-open__icon ${
    isItemDataOpen ? "down-to-open__icon_black" : "down-to-open__icon_white"
  }`;
  return (
    <div className="post">
      <div className="post-box">
        <button className={accordionButton} onClick={handleItemToggle}>
          <div className="accordion__heading_wrapper">
            <span className="accordion__heading-text_wrapper">
              <p className="post__price">{price}</p>

              <h2 className="post__name" id="name">
                {name}
              </h2>
            </span>

            <i className={openIcon}></i>
          </div>
          <span className={dividerClassName}></span>
        </button>
        <div className={accordionItemData}>
          <div className={accordionTextContent}>
            <p className="post__sub url">
              <a
                href={url}
                className="post__url"
                id="url"
                target="_blank"
                rel="noreferrer noopener"
              >
                Visit Website
              </a>
            </p>
            <div className="detail-wrapper description">
              <p className="text-header description-text-header">
                Our Thoughts,
              </p>
              <p className="post__sub" id="description">
                {description}
              </p>
            </div>
            <div className="address">
              <p className="text-header">Address:</p>

              <p className="post__sub" id="address">
                {address}
              </p>
            </div>
            {attire ? (
              <div className="detail-wrapper attire">
                <p className="text-header">Attire: </p>
                <p className="post__sub" id="attire">
                  {attire}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;
