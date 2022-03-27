import React, { useEffect, useState } from 'react';
import axios from 'axios'

import './DataProvider.css'

const dataContext = React.createContext(null);

function DataProvider({ children }) {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
        .then(response => {
            // console.log(response.data.results);
            setPokemonData(response.data.results);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    
    return (
        <dataContext.Provider value={pokemonData}>
            { children }
        </dataContext.Provider>
    );
}

export default DataProvider;