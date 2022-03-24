import React from 'react';
import Prop from '../Prop/Prop';
import './dist/PokemonCard.css';
import {getPokemonName, getPokemonId} from '../../resources/HelpingFunctions.js'

function PokemonCard({ pokemon, color }) {  
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
    <div style = {{"background-color": color}} className = "pokemon-card">
      <div className = "header">
        <div>
          <div style = {{"font-size": "25px", "font-weight": "bold"}}>{ getPokemonName(pokemon) }</div>
          <div>{ getPokemonId(pokemon) }</div>
        </div>

        <div className = "props">
          {cardProps}
        </div>
      </div>

      <img src = {pokemon.sprites.other.official_artwork.front_default} alt = "pokemon" className = "img"/>

      <div className = "footer">
        {cardFooter}
      </div>
    </div>
  );
}

  export default PokemonCard;