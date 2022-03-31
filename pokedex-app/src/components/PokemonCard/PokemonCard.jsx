import React from 'react'

import Prop from '../Prop/Prop';
import {getPokemonName, getPokemonId} from '../../resources/HelpingFunctions.js'

import './PokemonCard.css';

function getPokemonInfos(pokemon, pokemonSpecies) {
  let cardFooter = []

  if (pokemon?.weight < 100)
    cardFooter.push(<div className = "footerText" key='wheight'>
      <div>Weight</div>
      <div style = {{fontWeight : "bold"}}>{`0.${pokemon?.weight?.toString().charAt(0).concat(' kg')}`}</div>
    </div>)
  else {
    cardFooter.push(<div className = "footerText" key='wheight'>
      <div>Weight</div>
      <div style = {{fontWeight : "bold"}}>{`${pokemon?.weight?.toString().substring(0,2)}.${pokemon?.weight?.toString().substring(2)} kg`}</div>
    </div>)
  }

  if (pokemon?.height < 10)
    cardFooter.push(<div className = "footerText" key='height'>
      <div>Height</div>
      <div style = {{fontWeight : "bold"}}>{`0.${pokemon?.height?.toString().concat(' meters')}`}</div>
    </div>)
  else {
    cardFooter.push(<div className = "footerText" key='height'>
      <div>Height</div>
      <div style = {{fontWeight : "bold"}}>{`${pokemon?.height?.toString().charAt(0)}.${pokemon?.height?.toString().charAt(1)} metres`}</div>
    </div>)
  }

  cardFooter.push(<div className = "footerText" key='color'>
    <div>Color</div>
    <div style = {{fontWeight : "bold"}}>{getPokemonName(pokemonSpecies?.color)}</div>
  </div>)

  cardFooter.push(<div className = "footerText" key='hebitat'>
    <div>Habitat</div>
    <div style = {{fontWeight : "bold"}}>{getPokemonName(pokemonSpecies?.habitat)}</div>
  </div>)

  cardFooter.push(<div className = "footerText" key='shape'>
    <div>Shape</div>
    <div style = {{fontWeight : "bold"}}>{getPokemonName(pokemonSpecies?.shape)}</div>
  </div>)

  return cardFooter 
}

function PokemonCard({ pokemon, pokemonSpecies, color }) {  

  let cardProps = []
  for (let i = 0; i < pokemon?.types?.length; i++) {
    cardProps.push(<Prop pokemon = {pokemon} number = {i} key={i}/>)
  }

  return (
    <div style = {{backgroundColor: color}} className = "pokemon-card">
      <div className = "header">
        <div>
          <div style = {{fontSize: "25px", fontWeight: "bold"}}>{ getPokemonName(pokemon) }</div>
          <div>{ getPokemonId(pokemon) }</div>
        </div>
      
      <div className = "props">
        { cardProps }
        </div> 
      </div>

      <div className='img-container'>
        <img src = {pokemon?.sprites?.other?.['official-artwork']?.front_default} alt = "pokemon" className = "img"/>
      </div>

      <div className = "footer">
        { getPokemonInfos(pokemon, pokemonSpecies) }
      </div>
    </div>
  );
}

export default PokemonCard;