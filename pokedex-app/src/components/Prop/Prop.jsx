import React from 'react';
import './dist/Prop.css';

function Prop({ pokemon, number }) {
    let prop = pokemon.types[number].type.name;
    prop = prop.charAt(0).toUpperCase() + prop.slice(1);

    return(
        <div className = "prop">
            <img src = {`/type_icons/${pokemon.types[number].type.name}.svg`} alt = "prop" style = {{width: "15px", "margin-right": "5px"}}/>
            { prop }
        </div>
    )
}

export default Prop;