import './styles/App.css';

import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Card from './components/Card/Card';

import {useState} from 'react';

import data from './resources/data.json'

function App() {

  const [clientInput, setClientInput] = useState('');

  function displayPokemonList() {

    let itemList = [];
    for(let i = 0; i < 3; i++) {
      itemList.push(<Card pokemonData = {data} id = {i}/>)
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
