import React from 'react';
import Beer from './Beer';

const FavouriteBeerList = ({ faveBeers, faveButtonClicked, removeButtonClicked }) => {
  const faveBeersArray = faveBeers.map((beer) => {
    return (
      <div key={beer.id}>
        <Beer beer={beer} faveButtonClicked={faveButtonClicked} />
        <button onClick={() => removeButtonClicked(beer)}>Remove from Favourites</button>
      </div>
    );
  });

  return (
    <div>
      <ul>{faveBeersArray}</ul>
    </div>
  );
};

export default FavouriteBeerList;
