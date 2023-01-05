
const BeerDetail = ({beer}) => {

    return (
        <div className= "beer-detail">
            {beer.name} : {beer.tagline}
            {beer.description}
            abv: {beer.abv}

            <img 
                src=  {beer.image_url}
            />




        </div>
    )
}

export default BeerDetail