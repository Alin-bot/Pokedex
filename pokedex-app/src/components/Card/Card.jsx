import React from 'react';
import {Link} from 'react-router-dom'

import './Card.css';
import Prop from '../Prop/Prop'
import { getColor } from '../../resources/Color.js'

function CardTitle({ pokemonData, id }) {
    let name = pokemonData[id].name;
    name = name.charAt(0).toUpperCase() + name.slice(1);

    let pokemonId = String(pokemonData[id].id);
    pokemonId = '#'  + pokemonId.padStart(3, '0');
    
    return(
        <div className = "card-title">
            <div>{ name }</div>
            <div className = "card-title-id">{ pokemonId }</div>
        </div>
    )
}

function CardImg({ pokemonData, id }) {
    return(
        <div className = "card-imgs">
            <img className = "card-imgs-img" src = {pokemonData[id].sprites.other.official_artwork.front_default}/>
        </div>
    )
}

function Card({ pokemonData, id }) {

    const type = pokemonData[id].types[0].type.name;

    const color = getColor(type);

    let cardProps = []
    for (let i = 0; i < pokemonData[id].types.length; i++) {
        cardProps.push(<Prop pokemonData = {pokemonData} id = {id} number = {i}/>)
    }

    return (
        <Link to={`pokemon/${id}`} style = {{"background-color": color}} className = "card">
            <CardTitle pokemonData = {pokemonData} id = {id} />

            <div className = "bottom">
                <div>
                    {cardProps}
                </div>

                <CardImg pokemonData = {pokemonData} id = {id} />
            </div>
        </Link>
    );
}
  
export default Card;