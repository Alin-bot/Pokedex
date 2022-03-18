import './Pokemon.css';
import ErrorPage from '../ErrorPage/ErrorPage'
import Title from '../../components/TItle/Title';
import Prop from '../../components/Prop/Prop'
import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'
import { getColor } from '../../resources/Color.js';

let getPokemonName = (pokemonData, id) => pokemonData[id].name.charAt(0).toUpperCase() + pokemonData[id].name.slice(1);
let getPokemonId = (pokemonData, id) => '#' + String(pokemonData[id].id).padStart(3, '0');

function MainCard({ pokemonData, id, color }) {

  let pokemonName = getPokemonName(pokemonData, id)
  let pokemonId = getPokemonId(pokemonData, id)

  let cardProps = []
  for (let i = 0; i < pokemonData[id].types.length; i++) {
    cardProps.push(<Prop pokemonData = {pokemonData} id = {id} number = {i} />)
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
          <div>{pokemonName}</div>
          <div>{pokemonId}</div>
        </div>

        <div className = "header-props">
          {cardProps}
        </div>
      </div>

      <div className = "body">
        <img src = {pokemonData[id].sprites.other.official_artwork.front_default} alt = "pokemon" className = "img"/>
      </div>

      <div className = "footer">
        {cardFooter}
      </div>
    </div>
  );
}

function getStatBar(number) {

  let color = "rgb(240, 250, 100)";
  if (number < 50) color = "rgb(250, 100, 100)"
  if (number > 150) color = "rgb(100, 250, 100)"
  
  number += "px"
  

  return (
    <div className = "status-bar" style = {{width: number, height: "8px", "background-color": color}}/>
  )
}

function Stats({ color }) {
  const values = [
    ["HP", "124"],
    ["Attack", "69"],
    ["Defense", "255"],
    ["Speed", "33"],
    ["Special-Atack", "85"],
    ["Special-Defense", "188"],
  ];

  let stat = [];
  let statValue = [];
  let statName = [];
  for(let i = 0; i < values.length; i++) {
    statName.push(<div style = {{"font-weight": "700"}}>{values[i][0]}</div>);

    stat.push(<div>{getStatBar(values[i][1])}</div>);

    statValue.push(<div style = {{display: "flex", "justify-content": "flex-end"}}>{values[i][1]}</div>);
  }

  return (
    <div style = {{"background-color": color}} className = "stats">
      <div className = "one-stat">
        {statName}
      </div>
      <div className = "one-stat">
        {stat}
      </div>
      <div className = "one-stat">
        {statValue}
      </div>
    </div>
  )
}

function Evolutions ({ pokemonData, id, color }) {

  let evolutions = [];

  // if (id % 3 === 0) {
    for (let i = 0; i < 3; i++) {
      if (pokemonData[i] !== null) {
        let pokemonName = getPokemonName(pokemonData, i)
        let pokemonId = getPokemonId(pokemonData, i)
        evolutions.push(<Link to={`/home/pokemon/${i}`} className = "one-evolution">
          <div style = {{"font-weight": "700"}}>{pokemonName}</div>
          <div>{pokemonId}</div>
          <img src = {pokemonData[i].sprites.other.official_artwork.front_default} alt = "evolution" style = {{width: "100px"}}/>
        </Link>)
      }
    }
  // }

  return (
    <div style = {{"background-color": color}} className = "evolutions">
      { evolutions }
    </div>
  )
}

function getDescription(pokemonData, id, color) {

  const descriptionText = "The diamond shape crystals on its body exper air as cold as -240 degrees Fahrenheit, surrounding its enemies and encasing them in ice"

  return (
    <div className = "description">
      <div style = {{"font-weight": "700", "font-size": "20px"}}>Description</div>

      <div style = {{display: "flex", "flex-wrap": "wrap"}}>{descriptionText}</div>
    
      <Stats color = {color}/>

      <Evolutions pokemonData = {pokemonData} id = {id} color = {color}/>
    </div>
  )
}

function Sprites({ pokemonData, id, color }) {

  let sprites = [];
  for (let key in pokemonData[id].sprites) {
    if (key !== "other" && pokemonData[id].sprites[key] !== null) {
      let newKey = key.split("_")
      sprites.push(
        <div>
          <div>
            {newKey[0].charAt(0).toUpperCase() + newKey[0].slice(1) + ' ' + newKey[1].charAt(0).toUpperCase() + newKey[1].slice(1)}
          </div>
          <img src = {pokemonData[id].sprites[key]} alt = "pokemon" className = "sprite-imgs-img"/>
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
