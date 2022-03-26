import { useParams } from 'react-router-dom';

import ErrorPage from '../ErrorPage';
import Title from '../../components/Title';
import PokemonCard from '../../components/PokemonCard';
import PokemonSprites from '../../components/PokemonSprites';
import PokemonDescription from '../../components/PokemonDescription';
import PokemonEvolutions from '../../components/PokemonEvolutions';
import { getColor } from '../../resources/Color.js';

import './Pokemon.css';

function Pokemon({ pokemonData }) {

  const { id } = useParams();
  const pokemon = pokemonData.filter(pokemon => pokemon.id.toString() === id);

  if (id < 0 || id > 999 || isNaN(pokemon[0].id)) {
    return <ErrorPage/>
  }

  const type = pokemon[0].types[0].type.name;

  const color = getColor(type);

  return (
    <div className = "pokemon">
      <Title>Pokedex</Title>

      <div className = "cards">
        <PokemonCard pokemon = {pokemon[0]} color = {color}/>

        <PokemonDescription pokemon = {pokemon[0]} color = {color}/>

        <PokemonEvolutions pokemonData = {pokemonData} id = {id} color = {color}/>

        <PokemonSprites pokemon = {pokemon[0]} color = {color}/>
      </div>
    </div>
  );
}

export default Pokemon;