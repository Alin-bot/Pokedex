import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ErrorPage from '../ErrorPage';
import Title from '../../components/Title';
import PokemonSprites from '../../components/PokemonSprites';
import PokemonDescription from '../../components/PokemonDescription';
import PokemonEvolutions from '../../components/PokemonEvolutions';
import { getColor } from '../../resources/Color.js';

import './Pokemon.css';

const PokemonCard = lazy(() => import('../../components/PokemonCard'));

function Pokemon() {
  const [pokemon, setPokemon] = useState({});
  const [pokemonSpecies, setPokemonSpecies] = useState({});
  const [isLoadingPokemons, setLoadingPokemons] = useState(true);
  const [isLoadingSpecies, setLoadingSpecies] = useState(true)
  const { id } = useParams(); 

  const speciesUrl = pokemon?.species?.url;

  useEffect(() => {
    axios
      .get(`${speciesUrl}`)
      .then(response => {
        setPokemonSpecies(response.data);
        setLoadingSpecies(false)
      })
      .catch(error => {
        console.log(error);
      })
  }, [speciesUrl])

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        setPokemon(response.data);
        setLoadingPokemons(false)
      })
      .catch(error => {
        console.log(error);
      })
  }, [id])

  if (id < 0 || id > 999 || isNaN(id)) {
    return <ErrorPage/>
  }

  const color = getColor(pokemon?.types?.[0]?.type?.name);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className = "pokemon">
        <div className = "cards">
          <Title>Pokedex</Title>

          <div className = "pokemon-header">
            <PokemonCard pokemon = {pokemon} pokemonSpecies = {pokemonSpecies} color = {color} isLoadingPokemons={isLoadingPokemons} isLoadingSpecies={isLoadingSpecies}/>

            <PokemonDescription pokemon = {pokemon} pokemonSpecies = {pokemonSpecies} color = {color} isLoadingPokemons={isLoadingPokemons} isLoadingSpecies={isLoadingSpecies}/>
          </div>


          <div className="card-title">Evolutions</div>
          <PokemonEvolutions pokemonSpecies = {pokemonSpecies} id = {id} color = {color} isLoadingPokemons={isLoadingPokemons} isLoadingSpecies={isLoadingSpecies}/>

          <div className="card-title">Sprites</div>
          <PokemonSprites pokemon = {pokemon} color = {color} isLoadingPokemons={isLoadingPokemons} isLoadingSpecies={isLoadingSpecies}/>
        </div>
      </div>
    </Suspense>
  );
}

export default Pokemon;