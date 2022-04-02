import {Link} from 'react-router-dom'

import { getColor } from '../../resources/Color.js'
import { getPokemonName, getPokemonId } from '../../resources/HelpingFunctions.js'
import Prop from '../Prop'

import './Card.css';

function Card({ pokemon, id }) {
    const color = getColor(pokemon?.types?.[0]?.type?.name);

    let cardProps = []
    for (let i = 0; i < pokemon?.types?.length; i++) {
        cardProps.push(<Prop pokemon={pokemon} number={i} key={i}/>)
    }

    return (
        <Link to={`pokemon/${id}`} className="card" style={{backgroundColor: color}}>
            <div className="title">
                <div>{ getPokemonName(pokemon) }</div>
                <div className="id">{ getPokemonId(pokemon) }</div>
            </div>

            <div className="body">
                <div className="props">
                    {cardProps}
                </div>

                <img src = {pokemon?.sprites?.other?.['official-artwork']?.front_default} className="img" alt="img"/>
            </div>
        </Link>
    );
}
  
export default Card;