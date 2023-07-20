import React from "react";

const Beer = ({ beer, onBeerClicked }) => {
  const handleClick = function () {
    onBeerClicked(beer);
  };

  return (
    <li onClick={handleClick} className="clickable-li">
      <img
        className="beer-image"
        src={beer.image_url}
        alt="detail of beer selected bottle"
      />
         {beer.name}
    </li>
  );
};

export default Beer;
