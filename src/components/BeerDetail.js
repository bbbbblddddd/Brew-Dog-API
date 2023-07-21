import React from 'react';

const BeerDetail = ({ beer, faveButtonClicked, closeModal }) => {
  const handleAddToFavourites = () => {
    // Call the faveButtonClicked function passed from BeerContainer
    faveButtonClicked(beer);
  };

  return (
    <div className="beer-detail">
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>{beer.description}</p>
      <p>ABV: {beer.abv}</p>

      <img className="beer-image" src={beer.image_url} alt="detail of beer selected bottle" />

      {/* Add to Favourites button in the modal */}
      <button id='favourite-beer' onClick={handleAddToFavourites}>Add to favourites</button>
      <button className="close-button" onClick={closeModal}>
        X
      </button>
    </div>
  );
};

export default BeerDetail;