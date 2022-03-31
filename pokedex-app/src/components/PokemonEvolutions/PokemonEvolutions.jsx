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

function getEvolutionsRecursively(name, pokemon) {
    let evolutionRow = []

    evolutionRow.push(<Pokemon pokemonName={name} key={name}/>);

    if (pokemon?.evolves_to?.length !== 0) {
        evolutionRow.push(getEvolutionsRecursively(pokemon?.species?.name, pokemon?.evolves_to?.[0]));
    } else {
        evolutionRow.push(<Pokemon pokemonName={pokemon?.species?.name} key={pokemon?.species?.name}/>)
    }

    return evolutionRow;
}

function getEvolutions(pokemonName, evolves_to, color) {
    let evolutions = [];

    evolves_to?.map(pokemon => evolutions.push(
    <div style={{backgroundColor: color}} className="pokemon-evolutions" key={pokemon?.species?.name}>
        { getEvolutionsRecursively(pokemonName, pokemon) }
    </div>))

    return evolutions;
}

function PokemonEvolutions({ pokemonSpecies, color}) {
    const [chain, setChain] = useState({});

    const evolutionUrl = pokemonSpecies?.evolution_chain?.url;

    useEffect(() => {
        axios
            .get(`${evolutionUrl}`)
            .then(response => {
                console.log(response.data.chain);
                setChain(response.data.chain);
            })
            .catch(error => {
                console.log(error);
            })
    }, [evolutionUrl]);
    
    return (
        <div className='evolutions'>
            { getEvolutions(chain?.species?.name, chain?.evolves_to, color) }
        </div>
    )
}

export default PokemonEvolutions;