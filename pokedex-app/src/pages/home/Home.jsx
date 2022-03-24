import './dist/Home.css';

import Title from '../../components/TItle/Title';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';

import {useState} from 'react';

function Home({ data }) {

  const [clientInput, setClientInput] = useState('');
  
  function isIncludedInClientInput(str) {
    return str.toUpperCase().includes(clientInput.toUpperCase());
  }

  function displayPokemonList() {
    let items = [];

    data.filter(pokemon => isIncludedInClientInput(pokemon.name) ||
    isIncludedInClientInput(pokemon.types[0].type.name) ||
    isIncludedInClientInput(String(pokemon.id)) ||
    (pokemon.types.length === 2 && isIncludedInClientInput(pokemon.types[1].type.name))
    ).forEach(pokemon => items.push(<Card pokemon = {pokemon} id = {pokemon.id}/>))

    return(
      <div className = "cards">
        { items }
      </div>
    );
  }

  return (
    <div className="app">
      <Title>Pokedex</Title>

      <SearchBar value={clientInput} setValue={setClientInput}/>
      
      {displayPokemonList()}
    </div>
  );
}

export default Home;
