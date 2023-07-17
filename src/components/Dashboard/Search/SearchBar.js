import React from 'react'
import './searchBarstyle.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchBar = ({search,onSearchChange}) => {
    
    return (
        <div className='search-bar'>
            <SearchRoundedIcon />
            <input type='text' placeholder='Search' value={search} onChange={(e) => onSearchChange(e)}/>
        </div>
    )
}

export default SearchBar;