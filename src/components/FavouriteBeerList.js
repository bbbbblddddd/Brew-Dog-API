import React from 'react';
import Beer from './Beer';

const FavouriteBeerList = ({ beers, faveButtonClicked }) => {
    const faveBeers = beers && beers.map((beer) => {
        return <Beer beer={beer} faveButtonClicked={faveButtonClicked} key={beer.id} />
    });


    return (

        <div>
            <ul>
                {faveBeers}
            </ul>
        </div>

    )
}

export default FavouriteBeerList;