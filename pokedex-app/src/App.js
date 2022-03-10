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
      <Card pokemonData = {data} id = {id}/>
    );
  }

  return (
    <div className="App">
      <Title>Pokedex</Title>
      <SearchBar value={clientInput} setValue={setClientInput}/>
      <div>{displayPokemonList()}</div>
    </div>
    
  );
}

export default App;
