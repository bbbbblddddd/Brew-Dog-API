
const BeerDetail = ({ beer, faveButtonClicked }) => {



    return (
        <div className="beer-detail">
            {beer.name} : {beer.tagline}
            {beer.description}
            abv: {beer.abv}

            <img class="beer-image" src={beer.image_url} alt="detail of beer selected bottle" />

            <button id='favourite-beer' onClick={() => faveButtonClicked(beer)}>Add to favourites</button>
        </div>

    )
}

export default BeerDetail