import React, { useContext } from 'react'

import { WeatherContext } from '../../Services/WeatherContext.jsx'

//CSS
import './WindSpeed.css'

const WindSpeed = () => {

    const { weatherData } = useContext(WeatherContext);

    return (

        <div className='wind-speed-container'>

            <h1 className='wind-speed-info'>{'Wind Speed: '} <br /> {weatherData?.current.wind_kph} {' km/h'} </h1>

        </div>
    )
}

export default WindSpeed