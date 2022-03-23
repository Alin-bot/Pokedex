import './dist/PokemonSprites.css'

function PokemonSprites({ pokemon, color }) {

    let sprites = [];
    for (let key in pokemon.sprites) {
        if (key !== "other" && pokemon.sprites[key] !== null) {
        let newKey = key.split("_");
        sprites.push(
            <div>
            <div>
                {newKey[0].charAt(0).toUpperCase() + newKey[0].slice(1) + ' ' + newKey[1].charAt(0).toUpperCase() + newKey[1].slice(1)}
            </div>
            <img src = {pokemon.sprites[key]} alt = "pokemon" className = "sprite-imgs-img"/>
            </div>
        )
        }
    }

    return (
        <div style = {{"background-color": color}} className = "sprites">
        <h1>Sprites</h1>
        <div className = "sprites-imgs">
            {sprites}
        </div>
        </div>
    )
}

export default PokemonSprites;