import './PokemonSprites.css'

function PokemonSprites({ pokemon, color }) {

    let sprites = [];
    for (let key in pokemon?.sprites) {
        if (key !== "other" && key !== "versions" && pokemon?.sprites[key] !== null) {
            let newKey = key.split("_");
            sprites.push(
                <div className = "sprite" key={key}>
                    <div>
                        {newKey[0].charAt(0).toUpperCase()
                        + newKey[0].slice(1)
                        + ' '
                        + newKey[1].charAt(0).toUpperCase()
                        + newKey[1].slice(1)}
                    </div>
                    <img src = {pokemon?.sprites[key]} className = "img" alt = "pokemon"/>
                </div>
            )
        }
    }

    return (
        <div style = {{backgroundColor: color}} className = "pokemon-sprites">{
            sprites 
        }</div>
    )
}

export default PokemonSprites;