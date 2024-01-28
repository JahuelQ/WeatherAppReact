import React, { useContext } from 'react'

import { WeatherContext } from '../../Services/WeatherContext.jsx'

//CSS
import './Precipitation.css'

const Precipitation = () => {

    const { weatherData } = useContext(WeatherContext);

    return (

        <div className='precipitation-container'>

            <h1 className='precipitation-info'>{'Precipitation: '} <br /> {weatherData?.current.precip_mm} {' mm'} </h1>

        </div>
    )
}

export default Precipitation