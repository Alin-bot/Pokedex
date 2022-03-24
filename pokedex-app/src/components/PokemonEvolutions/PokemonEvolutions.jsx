import './dist/PokemonEvolutions.css'

import {getPokemonName, getPokemonId} from '../../resources/HelpingFunctions.js';

import { Link } from 'react-router-dom';

function PokemonEvolutions({ pokemonData, id, color}) {
  
    let evolutions = [];
    

    for (let i = 0; i < 3; i++) {
        if (pokemonData[id] !== null) {
            let pokemonName = getPokemonName(pokemonData[i])
            let pokemonId = getPokemonId(pokemonData[i])

            evolutions.push(
                <Link to={`/home/pokemon/${i}`} className = "evolution">
                    <div className = "title">{pokemonName}</div>

                    <div>{pokemonId}</div>

                    <img src = {pokemonData[i].sprites.other.official_artwork.front_default} className = "img" alt = "evolution"/>
                </Link>
            )
        }
    }

    
    return (
        <div style = {{"background-color": color}} className = "pokemon-evolutions">
        { evolutions }
        </div>
    )
}

export default PokemonEvolutions;