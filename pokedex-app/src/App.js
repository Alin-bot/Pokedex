import './App.css';

import Title from './components/TItle/Title';
import SearchBar from './components/SearchBar/SearchBar';
import Card from './components/Card/Card';

import {useState} from 'react';

import data from './resources/data.json'

function App() {

  const [clientInput, setClientInput] = useState('');

  function displayPokemonList() {

    const numberOfCards = data.length;
    
    let itemList = [];
    for(let i = 0; i < numberOfCards; i++){
      itemList.push(
        <Card pokemonData = {data} id = {i}/>
      )
    }

    return(
      <div className = "cards">
        {itemList}
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
