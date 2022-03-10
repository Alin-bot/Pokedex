import React from 'react';
import '../../../styles/Card/CardBottom/CardImg.css';

function CardImg({ pokemonData, id }) {
    return(
        <div class = "cardImg">
            <img class = "Img" src = {pokemonData[id].sprites.other.official_artwork.front_default}/>
        </div>
    )
}

export default CardImg;