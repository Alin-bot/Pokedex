import React, { useState } from 'react';

import Title from '../../components/Title';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';
import DataContext from '../../components/DataProvider/'

import './Home.css';
import axios from 'axios';
import { useEffect } from 'react';

function PageButtons({ setOffset, setPokemonsNumber, pokemonNumber}) {
  return (
    <div className='page-buttons'>
      {/* <button className='button' onClick={() => setOffset(prev => prev - pokemonNumber)}>
        {`<-- previous-page`}
      </button> */}
      <button className='button' onClick={() => setPokemonsNumber(prev => prev + 30)}>
        {`load more`}
      </button>
      {/* <button className='button' onClick={() => setOffset(prev => prev + pokemonNumber)}>
        {`next-page -->`}
      </button> */}
    </div>
  )
}

function Home() {
  const { pokemonData, setPokemonsNumber, setOffset, pokemonNumber } = React.useContext(DataContext);
  const [clientInput, setClientInput] = useState('');
  const [pokemonsAfterFetching, setPokemonsAfterFetching] = useState([]);
  
  function isIncludedInClientInput(str) {
    return str.toUpperCase().includes(clientInput.toUpperCase());
  }

  function DisplayPokemonList(pokemonData) {
    useEffect(() => {
      Promise
        .all(pokemonData?.map(pokemon => axios.get(`${pokemon?.url}`)))
        .then(response => setPokemonsAfterFetching(response))
        .catch(error => console.log(error))
    }, [pokemonData]);

    return (
      <div className = "cards">{
        pokemonsAfterFetching
          ?.filter(pokemon =>
            isIncludedInClientInput(pokemon?.data?.name) ||
            isIncludedInClientInput(pokemon?.data?.types?.[0]?.type?.name) ||
            isIncludedInClientInput(String(pokemon?.data?.id)) ||
            (pokemon?.types?.length === 2 && isIncludedInClientInput(pokemon?.data?.types?.[1]?.type?.name)))
          ?.map(pokemon => <Card pokemon = {pokemon?.data} id = {pokemon?.data?.id} key={pokemon?.data?.id}/>)
      }</div>
    );
  }

  return (
    <div className="app">
      <Title>Pokedex</Title>

      <SearchBar value={clientInput} setValue={setClientInput}/>
      
      {DisplayPokemonList(pokemonData)}

      <PageButtons setOffset={setOffset} setPokemonsNumber={setPokemonsNumber} pokemonNumber={pokemonNumber}/>
    </div>
  );
}

export default Home;
