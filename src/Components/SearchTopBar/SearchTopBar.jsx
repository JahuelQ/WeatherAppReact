import React, { useContext, useState } from 'react';

//Services
import { WeatherContext } from '../../Services/WeatherContext.jsx';

//CSS
import './SearchTopBar.css';

//ASSETS
import searchIcon from '../Assets/search-location.svg';



const SearchTopBar = () => {
    const { setLocation } = useContext(WeatherContext);
    const [searchTerm, setSearchTerm] = useState('');

    

    const handleSearch = (event) => {
        event.preventDefault();
        setLocation(searchTerm);
    };

    return (
        <div className='top-bar'>
            <form onSubmit={handleSearch}>
                <input
                    type='text'
                    className='search-city'
                    placeholder='Search City...'
                    value={searchTerm}
                    onChange={event => setSearchTerm(event.target.value)} />

                <button type='submit' className='search-button'>

                    <img src={searchIcon} alt='search button' className='search-icon' />

                </button>
            </form>
        </div>
    );
};

export default SearchTopBar;