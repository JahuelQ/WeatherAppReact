import React, { useContext } from 'react';

//CSS
import './WeatherApp.css';

//Services
import { WeatherContext } from '../../Services/WeatherContext.jsx';

//Components
import SearchTopBar from '../SearchTopBar/SearchTopBar';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import CurrentWeatherDetails from '../CurrentWeatherDetails/CurrentWeatherDetails.jsx';




const WeatherApp = () => {

    const { weatherData } = useContext(WeatherContext);


    return (
        <div className='weather-container'>

            <SearchTopBar />

            <CurrentWeather weatherType={weatherData && weatherData.current.condition.text} />

            <CurrentWeatherDetails />

        </div>


    )
}

export default WeatherApp