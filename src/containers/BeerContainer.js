import React, { useState, useEffect } from 'react';
import BeerList from '../components/BeerList';
import BeerDetail from '../components/BeerDetail';
import FavouriteBeerList from '../components/FavouriteBeerList';
import { BrowserRouter} from 'react-router-dom';

const BeerContainer = () => {
  const [beers, setBeers] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState(null);
  const [faveBeers, setFaveBeers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isNoResults, setIsNoResults] = useState(false);

  useEffect(() => {
    const getBeers = function () {
      fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${itemsPerPage}`)
        .then((res) => res.json())
        .then((beers) => setBeers(beers));
    };

    getBeers();
  }, [currentPage, itemsPerPage]);

  const onBeerClicked = function (beer) {
    setSelectedBeer(beer);
    setIsModalOpen(true);
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

  const handleSearch = () => {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchQuery}`)
      .then((res) => res.json())
      .then((beers) => {
        if (beers.length === 0) {
          setBeers([]);
          setIsNoResults(true); 
        } else {
          setBeers(beers);
          setIsNoResults(false); 
        }
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBeer(null);
  };

  return (
    <BrowserRouter>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress} // Add the keydown event listener
          placeholder="Search beers..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {isNoResults && <p>No results found.</p>}

      <div className="main-container">
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
        {isModalOpen && selectedBeer && (
          <div className="modal-overlay">
            <div className="modal-content">
              <BeerDetail
                beer={selectedBeer}
                faveButtonClicked={faveButtonClicked}
                closeModal={closeModal}
              />
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default BeerContainer;
