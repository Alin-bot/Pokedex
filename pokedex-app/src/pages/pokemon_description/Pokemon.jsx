import './Pokemon.css';
import ErrorPage from '../ErrorPage/ErrorPage'
import Title from '../../components/TItle/Title';
import Prop from '../../components/Prop/Prop'

import { useParams } from 'react-router-dom'
import { getColor } from '../../resources/Color.js';

function MainCard({ pokemonData, id, color }) {

  let pokemonName = pokemonData[id].name;
  pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

  let pokemonId = String(pokemonData[id].id);
  pokemonId = '#'  + pokemonId.padStart(3, '0');

  let cardProps = []
  for (let i = 0; i < pokemonData[id].types.length; i++) {
    cardProps.push(<Prop pokemonData = {pokemonData} id = {id} number = {i}/>)
  }

  let cardFooter = []
  for (let i = 0; i < 5; i++) {
    cardFooter.push(<div className = "footerText">
      <div>Hello</div>
      <div style = {{"font-weight" : "bold"}}>World</div>
    </div>)
  }

  return (
    <div style = {{"background-color": color}} className = "main-card">
        <div className = "header">
          <div className = "text-id">
            <h1>{pokemonName}</h1>
            <div>{pokemonId}</div>
          </div>

          <div className = "props">
            {cardProps}
          </div>
        </div>

        <div className = "body">
          <img className = "img" src = {pokemonData[id].sprites.other.official_artwork.front_default}/>
        </div>

        <div className = "footer">
          {cardFooter}
        </div>
    </div>
  );
}

function Stats({ color }) {
  return (
    <div style = {{"background-color": color}} className = "stats">
      hello
    </div>
  )
}

function Evolutions ({ color }) {

  return (
    <div style = {{"background-color": color}} className = "evolutions">
      hello2
    </div>
  )
}

function getDescription(pokemonData, id, color) {

  const descriptionText = "The diamond shape crystals on its body exper air as cold as -240 degrees Fahrenheit, surrounding its enemies and encasing them in ice"

  return (
    <div className = "description">
      <div>Description</div>

      <div style = {{display: "flex", "flex-wrap": "wrap"}}>{descriptionText}</div>
    
      <Stats color = {color}/>

      <Evolutions color = {color}/>
    </div>
  )
}

function Sprites({ pokemonData, id, color }) {

  let sprites = [];
  for (let key in pokemonData[id].sprites) {
    if (key != "other" && pokemonData[id].sprites[key] != null) {
      sprites.push(
        <div>
          <div>
            {key}
          </div>
          <img src = {pokemonData[id].sprites[key]} className = "sprite-imgs-img"/>
        </div>
      )
    }
  }
 
  return (
    <div style = {{"background-color": color}} className = "sprites">
      <h1>Sprites</h1>
      <div className = "sprites-imgs">
        {sprites}
      </div>
    </div>
  )
}

function Pokemon({ pokemonData }) {

  const { id } = useParams();

  if (id < 0 || id > 999 || isNaN(id)) {
    return <ErrorPage/>
  }

  const type = pokemonData[id].types[0].type.name;

  const color = getColor(type);

  return (
    <div className = "pokemon">
      <Title>Pokedex</Title>

      <div className = "cards">
        <MainCard pokemonData = {pokemonData} id = {id} color = {color}/>

        {getDescription( pokemonData, id, color)}

        <Sprites pokemonData = {pokemonData} id = {id} color = {color}/>
      </div>
    </div>
  );
}

export default Pokemon;
