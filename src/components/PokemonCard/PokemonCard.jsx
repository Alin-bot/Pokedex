import React from 'react'

import Prop from '../Prop/Prop';
import {getPokemonName, getPokemonId, getLoading} from '../../helpers/HelpingFunctions.js'

import './PokemonCard.css';

function getPokemonInfos(pokemon, pokemonSpecies) {
  let cardFooter = []

  if (pokemon?.weight < 100)
    cardFooter.push(<div key='wheight' className='info'>
      <div>Weight</div>
      <div className='info-title'>{`0.${pokemon?.weight?.toString().charAt(0).concat(' kg')}`}</div>
    </div>)
  else {
    cardFooter.push(<div key='wheight' className='info'>
      <div>Weight</div>
      <div className='info-title'>{`${pokemon?.weight?.toString().substring(0,2)}.${pokemon?.weight?.toString().substring(2)} kg`}</div>
    </div>)
  }

  if (pokemon?.height < 10)
    cardFooter.push(<div key='height' className='info'>
      <div>Height</div>
      <div className='info-title'>{`0.${pokemon?.height?.toString().concat(' meters')}`}</div>
    </div>)
  else {
    cardFooter.push(<div key='height' className='info'>
      <div>Height</div>
      <div className='info-title'>{`${pokemon?.height?.toString().charAt(0)}.${pokemon?.height?.toString().charAt(1)} metres`}</div>
    </div>)
  }

  if (!pokemonSpecies?.color) {
    cardFooter.push(<div key='color' className='info'>
      <div>Color</div>
      <div style = {{fontWeight : "bold"}}>{`???`}</div>
    </div>)
  } else {
    cardFooter.push(<div key='color' className='info'>
      <div>Color</div>
      <div style = {{fontWeight : "bold"}}>{getPokemonName(pokemonSpecies?.color)}</div>
    </div>)
  }

  if (!pokemonSpecies?.habitat) {
    cardFooter.push(<div key='hebitat' className='info'>
      <div>Habitat</div>
      <div className='info-title'>{`???`}</div>
    </div>)
  } else {
    cardFooter.push(<div key='hebitat' className='info'>
      <div>Habitat</div>
      <div className='info-title'>{getPokemonName(pokemonSpecies?.habitat)}</div>
    </div>)
  }

  if (!pokemonSpecies?.shape) {
    cardFooter.push(<div key='shape' className='info'>
      <div>Shape</div>
      <div className='info-title'>{`???`}</div>
    </div>)
  } else {
    cardFooter.push(<div key='shape' className='info'>
      <div>Shape</div>
      <div className='info-title'>{getPokemonName(pokemonSpecies?.shape)}</div>
    </div>)
  }


  return cardFooter 
}

function PokemonCard({ pokemon, pokemonSpecies, color, isLoadingPokemons, isLoadingSpecies }) {  

  let cardProps = []
  for (let i = 0; i < pokemon?.types?.length; i++) {
    cardProps.push(<Prop pokemon = {pokemon} number = {i} key={i}/>)
  }

  return (isLoadingPokemons || isLoadingSpecies) ? (
    getLoading()
  ) : (
    <div style = {{backgroundColor: color}} className = "pokemon-card">
      <div className = "header">
        <div>
          <div className='name'>{ getPokemonName(pokemon) }</div>
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
  )
}

export default PokemonCard;