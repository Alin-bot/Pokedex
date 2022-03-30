import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {getPokemonName, getPokemonId} from '../../resources/HelpingFunctions.js';

import './PokemonEvolutions.css'

function PokemonEvolutions({ pokemonSpecies, color}) {
    const [chain, setChain] = useState({});

    const evolutionUrl = pokemonSpecies?.evolution_chain?.url

    useEffect(() => {
        axios
            .get(`${evolutionUrl}`)
            .then(response => {
                console.log(response);
                setChain(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [evolutionUrl])





  
    // let evolutions = [];
    // const pokemon = pokemonData.filter(pokemon => pokemon.id.toString() === id);

    // for (let i = 0; i < 3; i++) {
    //     if (pokemon[0] !== null) {
    //         evolutions.push(
    //             <Link to={`/home/pokemon/${i}`} className = "evolution">
    //                 <div className = "title">{ getPokemonName(pokemonData[i]) }</div>

    //                 <div>{ getPokemonId(pokemonData[i]) }</div>

    //                 <img src = {pokemonData[i].sprites.other.official_artwork.front_default} className = "img" alt = "evolution"/>
    //             </Link>
    //         )
    //     }
    // }

    
    return (
        <div style = {{backgroundColor: color}} className = "pokemon-evolutions">
        { chain?.chain?.species?.name }
        </div>
    )
}

export default PokemonEvolutions;