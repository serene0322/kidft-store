import React from 'react';
import './search-bar.styles.scss';

export const SearchBar = ({ placeholder, handleChange }) => (
    <input 
        className='search' 
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}
    />
);