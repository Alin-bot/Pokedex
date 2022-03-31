import React, { useState } from 'react';

import Title from '../../components/Title';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';
import DataContext from '../../components/DataProvider/'

import './Home.css';
import axios from 'axios';
import { useEffect } from 'react';

function Home() {
  const { pokemonData, setPokemonsNumber } = React.useContext(DataContext);
  const [clientInput, setClientInput] = useState('');
  const [pokemonsAfterFetching, setPokemonsAfterFetching] = useState([]);
  
  function isIncludedInClientInput(str) {
    return str.toUpperCase().includes(clientInput.toUpperCase());
  }

  function DisplayPokemonList() {
    useEffect(() => {
      Promise
        .all(pokemonData?.map(pokemon => axios.get(`${pokemon.url}`)))
        .then(response => setPokemonsAfterFetching(response))
    }, []);

    return (
      <div className = "cards">{
        pokemonsAfterFetching?.filter(pokemon =>
            isIncludedInClientInput(pokemon?.data?.name) ||
            isIncludedInClientInput(pokemon?.data?.types?.[0]?.type?.name) ||
            isIncludedInClientInput(String(pokemon?.data?.id)) ||
            (pokemon?.types?.length === 2 && isIncludedInClientInput(pokemon?.data?.types?.[1]?.type?.name)))
          .map(pokemon => <Card pokemon = {pokemon?.data} id = {pokemon?.data?.id} key={pokemon?.data?.id}/>)
      }</div>
    );
  }

  return (
    <div className="app">
      <Title>Pokedex</Title>

      <SearchBar value={clientInput} setValue={setClientInput}/>
      
      {DisplayPokemonList()}
      <button onClick={() => setPokemonsNumber(prev => prev + 30)}>Press me</button>
    </div>
  );
}

export default Home;
