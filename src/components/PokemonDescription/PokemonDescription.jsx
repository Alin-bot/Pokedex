import { useEffect } from 'react';
import { useState } from 'react';
import { getPokemonName, getLoading } from '../../resources/HelpingFunctions';

import './PokemonDescription.css';

function getStatBar(number) {

    let color = "rgb(240, 250, 100)";
    if (number < 50) color = "rgb(250, 100, 100)";
    if (number > 150) color = "rgb(100, 250, 100)";

    number += "px";

    return (
        <div className='bar' style={{width: number, backgroundColor: color}}/>
    )
}

function Stats({ values, color }) {

    let stats = [];
    for(let i = 0; i < values?.length; i++) {
        stats.push(<div className='naming' key={i+1}>{ getPokemonName(values?.[i]?.stat) }</div>);

        stats.push(<div className='bars' key={(i+1)*10}>{ getStatBar(values?.[i]?.base_stat) }</div>);

        stats.push(<div className='numbers' key={(i+1)*100}>{ values?.[i]?.base_stat }</div>);
    }

    return (
        <div style={{backgroundColor: color}} className='stats'>
        { stats }
        </div>
    )
}
  
function PokemonDescription({ pokemon, pokemonSpecies, color, isLoadingPokemons, isLoadingSpecies }) {
    const [descriptionText, setDescriptionText] = useState('')

    const handleSelect = (e) => {
        setDescriptionText(e.target.value)
    }

    useEffect(() => {
        setDescriptionText(String(pokemonSpecies?.flavor_text_entries?.[0]?.flavor_text))
    }, [pokemonSpecies])

    return (isLoadingPokemons || isLoadingSpecies) ? (
        getLoading()
      ) : (
        <div className="pokemon-description">
            <div className="title-game">
                <div className="title">
                    Description
                </div>
                <div>
                    <label htmlFor="cars">Game:</label>
                    <select name="cars" onChange={handleSelect}>{
                        pokemonSpecies?.flavor_text_entries
                            ?.filter(text => text?.language?.name.toString() === "en")
                            ?.map(text => <option value={`${text?.flavor_text}`} key={text?.version?.name}>{getPokemonName(text?.version)}</option>)
                    }</select>
                </div>
            </div>

            <div className='description-text'>{ descriptionText }</div>
            
            <Stats values={ pokemon?.stats } color={ color }/>
        </div>
    )
}

export default PokemonDescription;