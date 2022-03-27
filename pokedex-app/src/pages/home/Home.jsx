import React, { useState } from 'react';

import Title from '../../components/Title';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';
import dataContext from '../../components/DataProvider'

import './Home.css';

function Home({ data }) {
  const pokemons = React.useContext(dataContext);
  const [clientInput, setClientInput] = useState('');
  
  function isIncludedInClientInput(str) {
    return str.toUpperCase().includes(clientInput.toUpperCase());
  }

  function displayPokemonList() {
    return (
      <div className = "cards">{
          data
            .filter(pokemon =>
              isIncludedInClientInput(pokemon.name) ||
              isIncludedInClientInput(pokemon.types[0].type.name) ||
              isIncludedInClientInput(String(pokemon.id)) ||
              (pokemon.types.length === 2 && isIncludedInClientInput(pokemon.types[1].type.name)))
            .map(pokemon => <Card pokemon = {pokemon} id = {pokemon.id}/>)
      }</div>
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
