import React from 'react';
import {Link} from 'react-router-dom'

import './Card.css';
import Prop from '../Prop/Prop'
import { getColor } from '../../resources/Color.js'

function CardTitle({ pokemon }) {
    let name = pokemon.name;
    name = name.charAt(0).toUpperCase() + name.slice(1);

    let pokemonId = String(pokemon.id);
    pokemonId = '#'  + pokemonId.padStart(3, '0');
    
    return(
        <div className = "card-title">
            <div>{ name }</div>
            <div className = "card-title-id">{ pokemonId }</div>
        </div>
    )
}

function CardImg({ pokemon }) {
    return(
        <div className = "card-imgs">
            <img className = "card-imgs-img" alt = "img" src = {pokemon.sprites.other.official_artwork.front_default}/>
        </div>
    )
}

function Card({ pokemon, id }) {

    const type = pokemon.types[0].type.name;

    const color = getColor(type);

    let cardProps = []
    for (let i = 0; i < pokemon.types.length; i++) {
        cardProps.push(<Prop pokemon = {pokemon} number = {i}/>)
    }

    return (
        <Link to={`pokemon/${id}`} style = {{"background-color": color}} className = "card">
            <CardTitle pokemon = {pokemon} />

            <div className = "bottom">
                <div className = "card-props">
                    {cardProps}
                </div>

                <CardImg pokemon = {pokemon} />
            </div>
        </Link>
    );
}
  
export default Card;