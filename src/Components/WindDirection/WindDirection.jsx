import React, { useContext } from 'react'

import { WeatherContext } from '../../Services/WeatherContext.jsx'

//CSS
import './WindDirection.css'

const WindDirection = () => {

    const { weatherData } = useContext(WeatherContext);

    return (

        <div className='wind-direction-container'>

            <h1 className='wind-direction-info'>{'Wind Direction: '} <br /> {weatherData?.current.wind_dir} </h1>

        </div>
    )
}

export default WindDirection