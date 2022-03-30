import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {getPokemonName, getPokemonId} from '../../resources/HelpingFunctions.js';
import Prop from '../Prop';

import './PokemonEvolutions.css'

function Pokemon({ pokemonName }) {
    const [pokemon, setPokemon] = useState({})

    let cardProps = []
    for (let i = 0; i < pokemon?.types?.length; i++) {
      cardProps.push(<Prop pokemon = {pokemon} number = {i} />)
    }

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => {
            
                setPokemon(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [pokemonName])

    return (
        <Link to={`/pokemon/${pokemon?.id}`} className = "evolution">
            <div className='title'>
                { getPokemonName(pokemon) }
            </div>
            { getPokemonId(pokemon) }

            <img src = {pokemon?.sprites?.other?.['official-artwork']?.front_default} className = "img" alt = "evolution"/>
            
            <div className='props'>
                { cardProps }
            </div>
        </Link>
    )
}

function getEvolutions(chain) {
    let evolutions = [];

    evolutions.push(<Pokemon pokemonName={chain?.species?.name}/>);
    evolutions.push(<Pokemon pokemonName={chain?.evolves_to?.[0]?.species?.name}/>);
    evolutions.push(<Pokemon pokemonName={chain?.evolves_to?.[0]?.evolves_to?.[0]?.species?.name}/>);

    return evolutions;
}

function PokemonEvolutions({ pokemonSpecies, color}) {
    const [chain, setChain] = useState({});

    const evolutionUrl = pokemonSpecies?.evolution_chain?.url;

    useEffect(() => {
        axios
            .get(`${evolutionUrl}`)
            .then(response => {
                setChain(response.data.chain);
            })
            .catch(error => {
                console.log(error);
            })
    }, [evolutionUrl]);
    
    return (
        <div style = {{backgroundColor: color}} className = "pokemon-evolutions">
            { getEvolutions(chain) }
        </div>
    )
}

export default PokemonEvolutions;