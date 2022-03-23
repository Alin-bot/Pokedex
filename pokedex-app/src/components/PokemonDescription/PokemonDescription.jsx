import './PokemonDescription.css';

function getStatBar(number) {

    let color = "rgb(240, 250, 100)";
    if (number < 50) color = "rgb(250, 100, 100)";
    if (number > 150) color = "rgb(100, 250, 100)";

    number += "px";


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
  
function PokemonDescription({pokemon, color}) {
    const descriptionText = "The diamond shape crystals on its body exper air as cold as -240 degrees Fahrenheit, surrounding its enemies and encasing them in ice"

    return (
        <div className = "description">
            <div style = {{"font-weight": "700", "font-size": "20px"}}>Description</div>

            <div style = {{display: "flex", "flex-wrap": "wrap"}}>{descriptionText}</div>
            
            <Stats color = {color}/>
        </div>
    )
}

export default PokemonDescription;