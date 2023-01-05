
const BeerDetail = ({ beer }) => {

    return (
        <div className="beer-detail">
            {beer.name} : {beer.tagline}
            {beer.description}
            abv: {beer.abv}

            <img src={beer.image_url} />

            <button id='favourite-beer'>Add to favourites</button>
        </div>
    )
}

export default BeerDetail