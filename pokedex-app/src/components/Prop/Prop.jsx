import React from 'react';
import './Prop.css';

import bug from '../../resources/type_icons/bug.svg'
import dark from '../../resources/type_icons/dark.svg'
import dragon from '../../resources/type_icons/dragon.svg'
import electric from '../../resources/type_icons/electric.svg'
import fairy from '../../resources/type_icons/fairy.svg'
import fighting from '../../resources/type_icons/fighting.svg'
import fire from '../../resources/type_icons/fire.svg'
import flying from '../../resources/type_icons/flying.svg'
import ghost from '../../resources/type_icons/ghost.svg'
import grass from '../../resources/type_icons/grass.svg'
import ground from '../../resources/type_icons/ground.svg'
import ice from '../../resources/type_icons/ice.svg'
import normal from '../../resources/type_icons/normal.svg'
import poison from '../../resources/type_icons/poison.svg'
import psychic from '../../resources/type_icons/psychic.svg'
import rock from '../../resources/type_icons/rock.svg'
import steel from '../../resources/type_icons/steel.svg'
import water from '../../resources/type_icons/water.svg'

// for me it doesn't work with just the path, i needed to import from folder in oreder to work
function getPropImg(pokemonData, id, number) {
    switch (pokemonData[id].types[number].type.name.toString()) {
        case "bug": return(<img src = {bug} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "dark": return(<img src = {dark} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "dragon": return(<img src = {dragon} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "electric": return(<img src = {electric} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "fairy": return(<img src = {fairy} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "fighting": return(<img src = {fighting} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "fire": return(<img src = {fire} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "flying": return(<img src = {flying} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "ghost": return(<img src = {ghost} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "grass": return(<img src = {grass} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "ground": return(<img src = {ground} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "ice": return(<img src = {ice} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "normal": return(<img src = {normal} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "poison": return(<img src = {poison} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "psychic": return(<img src = {psychic} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "rock": return(<img src = {rock} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "steel": return(<img src = {steel} style = {{width: "15px", "margin-right": "5px"}}/>)
        case "water": return(<img src = {water} style = {{width: "15px", "margin-right": "5px"}}/>)
    }
}

function Prop({ pokemonData, id, number }) {
    let prop = pokemonData[id].types[number].type.name;
    prop = prop.charAt(0).toUpperCase() + prop.slice(1);

    let propImg = getPropImg(pokemonData, id, number);

    return(
        <div className = "props">
            { propImg }
            { prop }
        </div>
    )
}

export default Prop;