import React, { useState, useEffect } from 'react';
import BeerList from '../components/BeerList';
import BeerDetail from '../components/BeerDetail';
import FavouriteBeerList from '../components/FavouriteBeerList';

const BeerContainer = () => {
  const [beers, setBeers] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState(null);
  const [faveBeers, setFaveBeers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const getBeers = function () {
      fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${itemsPerPage}`)
        .then((res) => res.json())
        .then((beers) => setBeers(beers));
    };

    getBeers();
  }, [currentPage, itemsPerPage]); // Include currentPage and itemsPerPage in the dependency array

  const onBeerClicked = function (beer) {
    setSelectedBeer(beer);
  };

  const faveButtonClicked = function (beer) {
    const isAlreadyFaved = faveBeers.some((faveBeer) => faveBeer.id === beer.id);

    if (!isAlreadyFaved) {
      setFaveBeers((prevFaveBeers) => [...prevFaveBeers, beer]);
    }
  };

  const removeButtonClicked = function (beerToRemove) {
    setFaveBeers((prevFaveBeers) => prevFaveBeers.filter((beer) => beer.id !== beerToRemove.id));
  };

  const handleNextPage = function () {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = function () {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="main-container">
      {selectedBeer ? <BeerDetail beer={selectedBeer} faveButtonClicked={faveButtonClicked} /> : null}
      <BeerList beers={beers} onBeerClicked={onBeerClicked} />
      {faveBeers.length > 0 ? (
        <FavouriteBeerList
          faveBeers={faveBeers}
          faveButtonClicked={faveButtonClicked}
          removeButtonClicked={removeButtonClicked}
        />
      ) : null}
      <div className="pagination">
        {currentPage > 1 ? <button onClick={handlePreviousPage}>Previous</button> : null}
        {beers.length === itemsPerPage ? <button onClick={handleNextPage}>Next</button> : null}
      </div>
    </div>
  );
};

export default BeerContainer;
