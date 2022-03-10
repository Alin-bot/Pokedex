import React from 'react';
import '../../../styles/Card/CardTitle/CardTitle.css';

function CardTitle({ pokemonData, id }) {
    let name = pokemonData[id].name;
    name = name.charAt(0).toUpperCase() + name.slice(1);

    let newId = pokemonData[id].id;
    if(newId < 10) {
        newId = "00" + newId;
    } else if(newId < 100) {
        newId = "0" + newId;
    }
    newId = "#" + newId;
    
    return(
        <div class = "cardTitle">
            <div>{ name }</div>
            <div class = "id">{ newId }</div>
        </div>
    )
}

export default CardTitle;
