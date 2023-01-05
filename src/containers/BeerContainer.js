import React, { useState, useEffect } from 'react';
import BeerList from '../components/BeerList';
import BeerDetail from '../components/BeerDetail';

const BeerContainer = () => {
    const [beers, setBeers] = useState();
    const [selectedBeer, setSelectedBeer] = useState(null);

    useEffect(() => {
        getBeers();
    }, [])

    const getBeers = function () {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(beers => setBeers(beers));
    }

    const onBeerClicked = function (beer) {
        console.log(beer);
        setSelectedBeer(beer);
    }

    return (

        <div className="main-container">
            {selectedBeer ? <BeerDetail beer={selectedBeer} /> : null}
            <BeerList beers={beers} onBeerClicked={onBeerClicked} />
        </div>
    )


}

export default BeerContainer