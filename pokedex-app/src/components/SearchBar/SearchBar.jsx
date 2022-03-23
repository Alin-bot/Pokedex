import React from 'react';
import './dist/SearchBar.css';

function Searchbar({ value, setValue }) {
    return (
        <input
            placeholder = "Search pokemon name, number or type..."
            className = "search-bar"
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    );
}
  
export default Searchbar;