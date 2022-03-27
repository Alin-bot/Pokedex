import React from 'react';

import Prop from '../Prop/Prop';
import {getPokemonName, getPokemonId} from '../../resources/HelpingFunctions.js'

import './PokemonCard.css';

function PokemonCard({ pokemon, color }) {  
  let cardProps = []
  for (let i = 0; i < pokemon?.types?.length; i++) {
    cardProps.push(<Prop pokemon = {pokemon} number = {i} />)
  }

  let cardFooter = []

    cardFooter.push(<div className = "footerText">
      <div>Weight</div>
      <div style = {{fontWeight : "bold"}}>{pokemon?.weight.toString().concat(' kg')}</div>
    </div>)

    cardFooter.push(<div className = "footerText">
      <div>Height</div>
      <div style = {{fontWeight : "bold"}}>{pokemon?.height.toString().concat(' meters')}</div>
    </div>)

    cardFooter.push(<div className = "footerText">
      <div>Color</div>
      <div style = {{fontWeight : "bold"}}>{pokemon?.height}</div>
    </div>)

    cardFooter.push(<div className = "footerText">
      <div>Habitat</div>
      <div style = {{fontWeight : "bold"}}>{pokemon?.height}</div>
    </div>)

    cardFooter.push(<div className = "footerText">
      <div>Shape</div>
      <div style = {{fontWeight : "bold"}}>{pokemon?.height}</div>
    </div>)

  return (
    <div style = {{backgroundColor: color}} className = "pokemon-card">
       <div className = "header">
         <div>
           <div style = {{fontSize: "25px", fontWeight: "bold"}}>{ getPokemonName(pokemon) }</div>
           <div>{ getPokemonId(pokemon) }</div>
         </div>
        
        <div className = "props">
          {cardProps}
         </div> 
       </div>
      
       <img src = {pokemon?.sprites?.other?.['official-artwork']?.front_default} alt = "pokemon" className = "img"/>

       <div className = "footer">
         {cardFooter}
       </div>
    </div>
  );
}

export default PokemonCard;