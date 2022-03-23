import React from 'react';
import './Prop.css';

function Prop({ pokemonData, id, number }) {
    let prop = pokemonData[id].types[number].type.name;
    prop = prop.charAt(0).toUpperCase() + prop.slice(1);

    return(
        <div className = "props">
            <img src = {`/type_icons/${pokemonData[id].types[number].type.name}.svg`} alt = "prop" style = {{width: "15px", "margin-right": "5px"}}/>
            { prop }
        </div>
    )
}

export default Prop;