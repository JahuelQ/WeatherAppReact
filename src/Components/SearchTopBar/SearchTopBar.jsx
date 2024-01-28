import React, { useContext, useState, useEffect } from 'react';

//Services
import { WeatherContext } from '../../Services/WeatherContext.jsx';
import { getAutoCompleteSearch } from '../../Services/WeatherService';

//CSS
import './SearchTopBar.css';

//ASSETS
import searchIcon from '../Assets/search-location.svg';


const SearchTopBar = () => {
    const { setLocation } = useContext(WeatherContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [autoCompleteResults, setAutoCompleteResults] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            getAutoCompleteSearch(searchTerm)
                .then(data => setAutoCompleteResults(data))
                .catch(error => console.error(error));
        }
    }, [searchTerm]);

    const handleSearch = (event) => {
        if (event) {
            event.preventDefault();
        }
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

                <div className='autocomplete-results'>
                    {autoCompleteResults.map((result, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => {
                                    setSearchTerm(result.name);
                                    handleSearch();
                                    setAutoCompleteResults([]);
                                }}
                                className='autocomplete-result'>
                                {result.name}
                            </div>
                        )
                    })}
                </div>

                <button type='submit' className='search-button'>
                    <img src={searchIcon} alt='search button' className='search-icon' />
                </button>
                
            </form>
        </div>
    );
};

export default SearchTopBar;