import React from 'react';


const Beer = ({ beer, onBeerClicked }) => {

    const handleClick = function () {
        onBeerClicked(beer);

    }

    return (

        <li onClick={handleClick} className="clickable-li">
            {beer.name}
        </li>
    )



}

export default Beer;