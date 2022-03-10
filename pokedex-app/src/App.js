import './styles/App.css';

import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Card from './components/Card/Card';

import {useState} from 'react';

import data from './resources/data.json'

function App() {

  const [clientInput, setClientInput] = useState('');

  function displayPokemonList() {

    const rows = 12;
    
    let itemList = [];
    for(let i = 0; i < rows; i += 3){

      itemList.push(
        <div class = "cardsRow">
          <Card pokemonData = {data} id = {i}/>
          <Card pokemonData = {data} id = {i+1}/>
          <Card pokemonData = {data} id = {i+2}/>
        </div>
      )

    }

    return(
      <div class = "cards">
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
