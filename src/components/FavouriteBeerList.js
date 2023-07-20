import React from 'react';
import Beer from './Beer';

const FavouriteBeerList = ({ faveBeers, faveButtonClicked, removeButtonClicked }) => {
    const faveBeersArray = faveBeers.map((beer) => {
        return <Beer beer={beer} faveButtonClicked={faveButtonClicked} key={beer.id} />
    });


    return (

        <div>
            <ul>
                {faveBeersArray}
                <button id='remove-beer'onClick={() => removeButtonClicked()}>Clear Favourites List</button>
            </ul>
        </div>

    )
}

export default FavouriteBeerList;