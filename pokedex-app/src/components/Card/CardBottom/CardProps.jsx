import React from 'react';
import '../../../styles/Card/CardBottom/CardProps.css';

function Prop({ pokemonData, id, number }) {
    let prop = pokemonData[id].types[number].type.name;
    prop = prop.charAt(0).toUpperCase() + prop.slice(1);

    return(
        <div class = "prop">
            { prop }
        </div>
    )
}

function CardProps({ pokemonData, id }) {

    if(pokemonData[id].types.length === 2) {
        return(
            <div class = "cardProps">
                <Prop pokemonData = {pokemonData} id = {id} number = "0"/>
                <Prop pokemonData = {pokemonData} id = {id} number = "1"/>
            </div>
        )
    } else {
        return(
            <div class = "cardProps">
                <Prop pokemonData = {pokemonData} id = {id} number = "0"/>
            </div>
        )
    }

}

export default CardProps;