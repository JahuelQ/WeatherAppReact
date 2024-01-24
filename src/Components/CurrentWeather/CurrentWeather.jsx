import React, { useContext } from 'react';

//CSS
import './CurrentWeather.css';

//Assets
import cloudyDay3 from '../Assets/cloudy-day-3.svg';
import cloudyNight3 from '../Assets/cloudy-night-3.svg';
import cloudy from '../Assets/cloudy.svg';
import sunny from '../Assets/sunny.svg';
import rainy3 from '../Assets/rainy-3.svg';
import rainy7 from '../Assets/rainy-7.svg';
import night from '../Assets/night.svg';
import thunder from '../Assets/thunder.svg';
import snowy3 from '../Assets/snowy-3.svg';
import snowy6 from '../Assets/snowy-6.svg';
import defaultIcon from '../Assets/default.svg';

// Services
import { WeatherContext } from '../../Services/WeatherContext.jsx';



const CurrentWeather = ({ weatherType }) => {
    let imagePath;

    let weatherTypes = weatherType ? weatherType.toLowerCase() : null;

    const { weatherData } = useContext(WeatherContext);

    let isDay = weatherData?.current.is_day;

    switch (weatherTypes) {

        case 'partly cloudy':
        case 'cloudy':
        case 'overcast':
            if (isDay === 1) {
                imagePath = cloudyDay3;
            }
            else {
                imagePath = cloudyNight3;
            }
            break;

        case 'sunny':
        case 'clear':
            if (isDay === 1) {
                imagePath = sunny;
            }
            else {
                imagePath = night;
            }
            break;

        case 'rain':
        case 'light rain':
        case 'moderate rain':
        case 'heavy rain':
        case 'light rain shower':
            if (isDay === 1) {
                imagePath = rainy3;
            }
            else {
                imagePath = rainy7;
            }
            break;

        case 'thunderstorm':
        case 'light thunderstorm':
        case 'moderate thunderstorm':
        case 'heavy thunderstorm':
            imagePath = thunder;
            break;

        case 'snow':
        case 'light snow':
        case 'moderate snow':
        case 'heavy snow':
        case 'light sleet':
            if (isDay === 1) {
                imagePath = snowy3;
            }
            else {
                imagePath = snowy6;
            }
            break;

        case 'fog':
            imagePath = cloudy;
            break;

        default:
            imagePath = defaultIcon;
            break;
    }

    return (
        <div className='weather-location'>

            <h4 className='weather-location'>{weatherData?.location.name + ', '}
                {weatherData?.location.country + '.. '}
                {' Synced:  ' + weatherData?.location.localtime}
            </h4>

            <div className='current-weather'>

                <h1 className='weather-info'>{weatherData?.current.temp_c + ' °C'}</h1>
                {weatherTypes && <div className='image-container'>
                    <img src={imagePath} alt={weatherTypes} />
                    <p>{weatherType}</p>
                </div>}
                <h3 className='weather-info-feels-like'>{'Feels'}
                    <br /> {'like:'} <br /> {weatherData?.current.feelslike_c + ' °C'}</h3>



            </div>
        </div>
    )


};

export default CurrentWeather;
