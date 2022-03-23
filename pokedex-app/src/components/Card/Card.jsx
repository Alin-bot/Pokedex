import './dist/Card.css';
import Prop from '../Prop/Prop'

import { getColor } from '../../resources/Color.js'
import { getPokemonName, getPokemonId } from '../../resources/HelpingFunctions.js'

import {Link} from 'react-router-dom'

function Card({ pokemon, id }) {
    const color = getColor(pokemon.types[0].type.name);

    let cardProps = []
    for (let i = 0; i < pokemon.types.length; i++) {
        cardProps.push(<Prop pokemon = {pokemon} number = {i}/>)
    }

    return (
        <Link to={`pokemon/${id}`} className = "card" style = {{"background-color": color}}>
            <div className = "title">
                <div>{ getPokemonName(pokemon) }</div>
                <div className = "id">{ getPokemonId(pokemon) }</div>
            </div>

            <div className = "body">
                <div className = "props">
                    {cardProps}
                </div>

                <img src = {pokemon.sprites.other.official_artwork.front_default} className = "img" alt = "img"/>
            </div>
        </Link>
    );
}
  
export default Card;