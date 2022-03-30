import React, { useEffect, useState } from 'react';
import axios from 'axios'

import './DataProvider.css'

const DataContext = React.createContext({});

export const DataProvider = ({ children }) => {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
        .then(response => {
            setPokemonData(response.data.results);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    
    return (
        <DataContext.Provider value={pokemonData}>
            { children }
        </DataContext.Provider>
    );
}

export default DataContext;