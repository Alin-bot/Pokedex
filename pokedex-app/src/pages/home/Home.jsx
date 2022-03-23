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

    const numberOfCards = data.length;

    let itemList = [];
    for(let i = 0; i < numberOfCards; i++){

      if(isIncludedInClientInput(data[i].name) || isIncludedInClientInput(data[i].types[0].type.name) || isIncludedInClientInput(String(data[i].id))) {

        itemList.push(
          <Card pokemon = {data[i]} id = {i}/>
        )
      } else if(data[i].types.length === 2 && isIncludedInClientInput(data[i].types[1].type.name)) {

        itemList.push(
          <Card pokemon = {data[i]} id = {i}/>
        )
      }
    }

    return(
      <div className = "cards">
        {itemList}
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
