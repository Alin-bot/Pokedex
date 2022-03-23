import './dist/PokemonEvolutions.css'

import {getPokemonName, getPokemonId} from '../../resources/HelpingFunctions.js';

import { Link } from 'react-router-dom';

function PokemonEvolutions({ pokemonData, id, color}) {
  
    let evolutions = [];
    
    // if (id % 3 === 0) {
        for (let i = 0; i < 3; i++) {
        if (pokemonData[id] !== null) {
            let pokemonName = getPokemonName(pokemonData[i])
            let pokemonId = getPokemonId(pokemonData[i])
            evolutions.push(<Link to={`/home/pokemon/${i}`} className = "one-evolution">
                <div style = {{"font-weight": "700"}}>{pokemonName}</div>
                <div>{pokemonId}</div>
                <img src = {pokemonData[i].sprites.other.official_artwork.front_default} alt = "evolution" style = {{width: "100px"}}/>
            </Link>)
        }
        }
    // }
    
    return (
        <div style = {{"background-color": color}} className = "evolutions">
        { evolutions }
        </div>
    )
}

export default PokemonEvolutions;