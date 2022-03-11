import React from 'react';

import './Card.css';

function CardTitle({ pokemonData, id }) {
    let name = pokemonData[id].name;
    name = name.charAt(0).toUpperCase() + name.slice(1);

    let pokemonId = String(pokemonData[id].id);
    pokemonId = '#'  + pokemonId.padStart(3, '0');
    
    return(
        <div className = "cardTitle">
            <div>{ name }</div>
            <div className = "id">{ pokemonId }</div>
        </div>
    )
}

function Prop({ pokemonData, id, number }) {
    let prop = pokemonData[id].types[number].type.name;
    prop = prop.charAt(0).toUpperCase() + prop.slice(1);

    let color = "rgba(255, 255, 255, 0.5)"
    if(number === "1") {
        if(pokemonData[id].types[number].type.name === "poison") {
            color = "purple"
        } else if(pokemonData[id].types[number].type.name === "flying") {
            color = "rgb(180, 150, 216)"
        }
    }

    return(
        <div style = {{"background-color": color}} className = "prop">
            { prop }
        </div>
    )
}

function CardProps({ pokemonData, id }) {

    if(pokemonData[id].types.length === 2) {
        return(
            <div className = "cardProps">
                <Prop pokemonData = {pokemonData} id = {id} number = "0"/>
                <Prop pokemonData = {pokemonData} id = {id} number = "1"/>
            </div>
        )
    } else {
        return(
            <div className = "cardProps">
                <Prop pokemonData = {pokemonData} id = {id} number = "0"/>
            </div>
        )
    }

}

function CardImg({ pokemonData, id }) {
    return(
        <div className = "cardImg">
            <img className = "Img" src = {pokemonData[id].sprites.other.official_artwork.front_default}/>
        </div>
    )
}

function Card({ pokemonData, id }) {

    const type = pokemonData[id].types[0].type.name;

    let color = "black";

    if(type === "grass") {
        color = "rgb(136, 214, 121)";
    } else if(type === "fire") {
        color = "rgb(228, 127, 127)";
    } else if(type === "water") {
        color = "rgb(125, 146, 216)";
    } else if(type === "electric") {
        color = "rgb(228, 230, 117)";
    } else if(type === "normal") {
        color = "rgb(158, 138, 95)";
    }  else if(type === "ghost") {
        color = "rgb(143, 112, 194)";
    } 

    return (
        <div style = {{"background-color": color}} className = "cardBox">
            <CardTitle pokemonData = {pokemonData} id = {id} />

            <div className = "bottomCard">
                <CardProps pokemonData = {pokemonData} id = {id} />

                <CardImg pokemonData = {pokemonData} id = {id} />
            </div>
        </div>
    );
}
  
export default Card;