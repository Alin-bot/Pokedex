import './PokemonDescription.css';

function getStatBar(number) {

    let color = "rgb(240, 250, 100)";
    if (number < 50) color = "rgb(250, 100, 100)";
    if (number > 150) color = "rgb(100, 250, 100)";

    number += "px";


    return (
        <div className = "bar" style = {{width: number, backgroundColor: color}}/>
    )
}

function Stats({ values, color }) {

    let stats = [];
    for(let i = 0; i < values.length; i++) {
        stats.push(<div>{ values?.[i]?.stat?.name }</div>);

        stats.push(<div className = "bars">{ getStatBar(values?.[i]?.base_stat) }</div>);

        stats.push(<div className = "numbers">{ values?.[i]?.base_stat }</div>);
    }

    return (
        <div style = {{backgroundColor: color}} className = "stats">
        { stats }
        </div>
    )
}
  
function PokemonDescription({ pokemon, color }) {
    const descriptionText = "The diamond shape crystals on its body exper air as cold as -240 degrees Fahrenheit, surrounding its enemies and encasing them in ice"

    return (
        <div className = "pokemon-description">
            <div className = "title">Description</div>

            <div>{ descriptionText }</div>
            
            <Stats values = { pokemon?.stats } color = { color }/>
        </div>
    )
}

export default PokemonDescription;