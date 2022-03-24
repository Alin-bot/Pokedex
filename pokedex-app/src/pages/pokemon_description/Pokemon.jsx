import './dist/Pokemon.css';

import ErrorPage from '../ErrorPage/ErrorPage';
import Title from '../../components/TItle/Title';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import PokemonSprites from '../../components/PokemonSprites/PokemonSprites';
import PokemonDescription from '../../components/PokemonDescription/PokemonDescription';
import PokemonEvolutions from '../../components/PokemonEvolutions/PokemonEvolutions';

import { getColor } from '../../resources/Color.js';

import { useParams } from 'react-router-dom';

// const Pokedex = createContext({});

// const PokedexProvider = ({ children }) => {

//   const [pokemonData, setPokemonData] = useState(0);

//   return <Pokedex.Provider value = {{ pokemonData }}>
//     { children }
//     </Pokedex.Provider>
// }

function Pokemon({ pokemonData }) {

  const { id } = useParams();
  const pokemon = pokemonData[id];

  if (id < 0 || id > 999 || isNaN(id)) {
    return <ErrorPage/>
  }

  const type = pokemon.types[0].type.name;

  const color = getColor(type);

  return (
    <div className = "pokemon">
      <Title>Pokedex</Title>

      <div className = "cards">
        <PokemonCard pokemon = {pokemon} color = {color}/>

        <PokemonDescription pokemon = {pokemon} color = {color}/>

        <PokemonEvolutions pokemonData = {pokemonData} id = {id} color = {color}/>

        <PokemonSprites pokemon = {pokemon} color = {color}/>
      </div>
    </div>
  );
}

export default Pokemon;