import React from 'react';
import Beer from './Beer';

const BeerList = ({ beers, onBeerClicked }) => {
    const beerItems = beers && beers.map((beer) => {
        return <Beer beer={beer} onBeerClicked={onBeerClicked} key={beer.id} />
    });


    return (

        <div>
          
            <ul className="beerlist">{beerItems}</ul>;

    
        </div>

    )
}

export default BeerList;
