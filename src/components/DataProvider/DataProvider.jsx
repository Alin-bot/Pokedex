import React, { useEffect, useState } from 'react';
import axios from 'axios'

import './DataProvider.css'

const DataContext = React.createContext({});

export const DataProvider = ({ children }) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonsNumber, setPokemonsNumber] = useState(30);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonsNumber}&offset=${offset}`)
        .then(response => {
            setPokemonData(response.data.results);
        })
        .catch(error => console.log(error))
    }, [pokemonsNumber, offset])

    return (
        <DataContext.Provider value={{ pokemonData, setPokemonsNumber, setOffset, pokemonsNumber }}>
            { children }
        </DataContext.Provider>
    );
}

export default DataContext;