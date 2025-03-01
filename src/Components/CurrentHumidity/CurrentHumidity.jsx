import React, { useContext } from 'react';

//CSS
import './CurrentHumidity.css'

//Services
import { WeatherContext } from '../../Services/WeatherContext.jsx';

const CurrentHumidity = () => {

    const { weatherData } = useContext(WeatherContext);

    return (

            <div className='humidity-container'>

                <h1 className='humidity-info'>{'Humidity: '} <br /> {weatherData?.current.humidity}</h1>

            </div>

    )
}

export default CurrentHumidity