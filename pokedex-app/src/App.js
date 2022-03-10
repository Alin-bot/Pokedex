import './styles/App.css';

import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Card from './components/Card/Card';

import {useState} from 'react';

import data from './resources/data.json'

function App() {

  const [clientInput, setClientInput] = useState('');

  function displayPokemonList() {
    const id = "11";

    return(
      <div class = "cards">
        <Card pokemonData = {data} id = {0}/>
        <Card pokemonData = {data} id = {1}/>
        <Card pokemonData = {data} id = {2}/>
      </div>
    );
  }

  return (
    <div className="App">
      <Title>Pokedex</Title>
      <SearchBar value={clientInput} setValue={setClientInput}/>
      {displayPokemonList()}
    </div>
    
  );
}

export default App;
