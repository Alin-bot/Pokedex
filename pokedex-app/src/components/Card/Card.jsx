import React from 'react';
import CardTitle from './CardTitle/CardTitle';
import CardProps from './CardBottom/CardProps';
import CardImg from './CardBottom/CardImg'

import '../../styles/Card/Card.css';

function Card({ pokemonData, id }) {
    return (
        <div class = "cardBox">
            <CardTitle pokemonData = {pokemonData} id = {id} />

            <div class = "bottomCard">
                <CardProps pokemonData = {pokemonData} id = {id} />

                <CardImg pokemonData = {pokemonData} id = {id} />
            </div>
        </div>
    );
}
  
export default Card;