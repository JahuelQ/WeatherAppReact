import React, { useContext } from 'react';

//CSS
import './WeatherApp.css';

//Services
import { WeatherContext } from '../../Services/WeatherContext.jsx';

//Components
import SearchTopBar from '../SearchTopBar/SearchTopBar';
import CurrentWeather from '../CurrentWeather/CurrentWeather';




const WeatherApp = () => {

    const { weatherData } = useContext(WeatherContext);


    return (
        <div className='weather-container'>

            <SearchTopBar />

            <CurrentWeather weatherType={weatherData && weatherData.current.condition.text} />

        </div>


    )
}

export default WeatherApp