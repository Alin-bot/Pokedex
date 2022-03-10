import React from 'react';
import CardTitle from './CardTitle/CardTitle';
import CardProps from './CardBottom/CardProps';
import CardImg from './CardBottom/CardImg'

import '../../styles/Card/Card.css';

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
        <div style = {{"background-color": color}} class = "cardBox">
            <CardTitle pokemonData = {pokemonData} id = {id} />

            <div class = "bottomCard">
                <CardProps pokemonData = {pokemonData} id = {id} />

                <CardImg pokemonData = {pokemonData} id = {id} />
            </div>
        </div>
    );
}
  
export default Card;