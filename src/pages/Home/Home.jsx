import React, { useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

import Title from '../../components/Title';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';
import DataContext from '../../components/DataProvider/'

import './Home.css';
import useFetch from '../../helpers/useFetch'

function Home() {
//  const { pokemonData, setPokemonsNumber, setOffset, pokemonNumber } = React.useContext(DataContext);
  const [clientInput, setClientInput] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`)
  const { loading, data } = useFetch(url);
  
  const observer = useRef()
  const lastPokemonRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        // go to next
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, data])

  // function isIncludedInClientInput(str) {
  //   return str.toUpperCase().includes(clientInput.toUpperCase());
  // }

  function DisplayPokemonList(data) {
    useEffect(() => {
      Promise
        .all(data?.results?.map(pokemon => axios.get(`${pokemon?.url}`)))
        .then(response => setPokemons(response))
        .catch(error => console.log(error))
    }, [data]);

    console.log(pokemons)
    return (
      <div className = "cards">{
        pokemons
          ?.map((pokemon, index) => {
            return <Card pokemon = {pokemon?.data} id = {pokemon?.data?.id} key={pokemon?.data?.id}/>
          })
      }<div ref={lastPokemonRef}></div>
      </div>
    );
  }

  return (
    <div className="app">
      <Title>Pokedex</Title>

      <SearchBar value={clientInput} setValue={setClientInput}/>
      
      {DisplayPokemonList(data)}

    </div>
  );
}

export default Home;
