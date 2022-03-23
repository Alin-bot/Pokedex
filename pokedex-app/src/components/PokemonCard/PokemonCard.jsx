import React from 'react';
import Prop from '../Prop/Prop';
import './PokemonCard.css';
import {getPokemonName, getPokemonId} from '../../resources/HelpingFunctions.js'

function PokemonCard({ pokemon, color }) {
  
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

  export default PokemonCard;