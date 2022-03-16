import React from 'react';
import './Prop.css';

function Prop({ pokemonData, id, number }) {
    let prop = pokemonData[id].types[number].type.name;
    prop = prop.charAt(0).toUpperCase() + prop.slice(1);

    return(
        <div className = "props">
            <img src={`../../resources/type_icons/${pokemonData[id].types[number].type.name}`} />
            { prop }
        </div>
    )
}

export default Prop;