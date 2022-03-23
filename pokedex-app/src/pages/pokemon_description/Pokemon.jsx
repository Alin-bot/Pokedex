import './Pokemon.css';
import ErrorPage from '../ErrorPage/ErrorPage'
import Title from '../../components/TItle/Title';
import Prop from '../../components/Prop/Prop'
import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'
import { getColor } from '../../resources/Color.js';

let getPokemonName = (pokemon) => pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
let getPokemonId = (pokemon) => '#' + String(pokemon.id).padStart(3, '0');

function MainCard({ pokemon, color }) {
  
  let pokemonName = getPokemonName(pokemon)
  let pokemonId = getPokemonId(pokemon)

  let cardProps = []
  for (let i = 0; i < pokemon.types.length; i++) {
    cardProps.push(<Prop pokemon = {pokemon} number = {i} />)
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
          <div style = {{"font-size": "25px", "font-weight": "bold"}}>{pokemonName}</div>
          <div>{pokemonId}</div>
        </div>

        <div className = "header-props">
          {cardProps}
        </div>
      </div>

      <div className = "body">
        <img src = {pokemon.sprites.other.official_artwork.front_default} alt = "pokemon" className = "img"/>
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

  let stats = [];
  for(let i = 0; i < values.length; i++) {
    stats.push(<div>{ values[i][0] }</div>);

    stats.push(<div style = {{"align-self": "center"}}>{ getStatBar(values[i][1]) }</div>);

    stats.push(<div style = {{"justify-self": "end"}}>{ values[i][1] }</div>);
  }

  return (
    <div style = {{"background-color": color}} className = "stats">
      { stats }
    </div>
  )
}

function Evolutions ({ pokemon, color }) {

  let evolutions = [];

  // if (id % 3 === 0) {
    for (let i = 0; i < 3; i++) {
      if (pokemon !== null) {
        let pokemonName = getPokemonName(pokemon)
        let pokemonId = getPokemonId(pokemon)
        evolutions.push(<Link to={`/home/pokemon/${i}`} className = "one-evolution">
          <div style = {{"font-weight": "700"}}>{pokemonName}</div>
          <div>{pokemonId}</div>
          <img src = {pokemon.sprites.other.official_artwork.front_default} alt = "evolution" style = {{width: "100px"}}/>
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

function getDescription(pokemon, color) {

  const descriptionText = "The diamond shape crystals on its body exper air as cold as -240 degrees Fahrenheit, surrounding its enemies and encasing them in ice"

  return (
    <div className = "description">
      <div style = {{"font-weight": "700", "font-size": "20px"}}>Description</div>

      <div style = {{display: "flex", "flex-wrap": "wrap"}}>{descriptionText}</div>
    
      <Stats color = {color}/>

      <Evolutions pokemon = {pokemon} color = {color}/>
    </div>
  )
}

function Sprites({ pokemon, color }) {

  let sprites = [];
  for (let key in pokemon.sprites) {
    if (key !== "other" && pokemon.sprites[key] !== null) {
      let newKey = key.split("_")
      sprites.push(
        <div>
          <div>
            {newKey[0].charAt(0).toUpperCase() + newKey[0].slice(1) + ' ' + newKey[1].charAt(0).toUpperCase() + newKey[1].slice(1)}
          </div>
          <img src = {pokemon.sprites[key]} alt = "pokemon" className = "sprite-imgs-img"/>
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
  const pokemon = pokemonData[id];

  if (id < 0 || id > 999 || isNaN(id)) {
    return <ErrorPage/>
  }

  const type = pokemon.types[0].type.name;

  const color = getColor(type);

  return (
    <div className = "pokemon">
      <Title>Pokedex</Title>

      <div className = "cards">
        <MainCard pokemon = {pokemon} color = {color}/>

        {getDescription( pokemon, color)}

        <Sprites pokemon = {pokemon} color = {color}/>
      </div>
    </div>
  );
}

export default Pokemon;