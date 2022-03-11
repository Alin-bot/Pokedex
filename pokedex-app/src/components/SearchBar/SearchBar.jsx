import React from 'react';
import './SearchBar.css';

function Searchbar({ value, setValue }) {
    return (
        <input
            placeholder = "Search pokemon name, number or type..."
            className = "searchBox"
            value={value}
        />
    );
}
  
export default Searchbar;