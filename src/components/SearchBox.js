import React from 'react';

const SearchBox = ({searchProperty}) => {
    return (
        <div className="pa2">
            <input
            className = 'pa3 ba b--green'
            type='search'
            placeholder="Enter Waifu" 
            onChange = {searchProperty}
            />
        </div>
    );
}

export default SearchBox;