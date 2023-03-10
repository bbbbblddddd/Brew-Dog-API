import React, { useState, useEffect } from 'react';
import BeerList from '../components/BeerList';
import BeerDetail from '../components/BeerDetail';

const BeerContainer = () => {
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);
    const [faveBeers, setFaveBeers] = useState([]);

    useEffect(() => {
        getBeers();
    }, [])

    const getBeers = function () {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(beers => setBeers(beers));
    }

    const onBeerClicked = function (beer) { 
        setSelectedBeer(beer);
    }

    const faveButtonClicked = function (beer) {
        console.log(beer);
        // const faveBeers = 
        // setFaveBeers(beer);

    }

    

    

    return (

        <div className="main-container">
            {selectedBeer ? <BeerDetail beer={selectedBeer} faveButtonClicked={faveButtonClicked} /> : null}
            <BeerList beers={beers} onBeerClicked={onBeerClicked} />
            {/* <FaveBeers beers={beers} faveButtonClicked={faveButtonClicked} /> */}
        </div>
    )


}

export default BeerContainer