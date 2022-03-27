import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ErrorPage from '../ErrorPage';
import Title from '../../components/Title';
import PokemonCard from '../../components/PokemonCard';
import PokemonSprites from '../../components/PokemonSprites';
import PokemonDescription from '../../components/PokemonDescription';
import PokemonEvolutions from '../../components/PokemonEvolutions';
import { getColor } from '../../resources/Color.js';

import './Pokemon.css';

function Pokemon() {
  const [pokemon, setPokemon] = useState({})
  const { id } = useParams(); 

  useEffect(() => {
      axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
          console.log(response.data);
          setPokemon(response.data);
          
      })
      .catch(error => {
          console.log(error);
      })
  }, [id])

  if (id < 0 || id > 999 || isNaN(pokemon.id)) {
    return <ErrorPage/>
  }

  const color = getColor(pokemon?.types?.[0]?.type?.name);

  return (
    <div className = "pokemon">
      <Title>Pokedex</Title>

      <div className = "cards">
        <div className = "header">
          <PokemonCard pokemon = {pokemon} color = {color}/>

          <PokemonDescription pokemon = {pokemon} color = {color}/>
        </div>


        <div className="card-title">Evolutions</div>
        {/* <PokemonEvolutions pokemonData = {pokemonData} id = {id} color = {color}/> */}

        <div className="card-title">Sprites</div>
        <PokemonSprites pokemon = {pokemon} color = {color}/>
      </div>
    </div>
  );
}

export default Pokemon;