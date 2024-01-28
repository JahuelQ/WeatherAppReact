import React, { useState, useContext } from 'react';

// import { WeatherContext } from '../../Services/WeatherContext.jsx';

//CSS
import './CurrentWeatherDetails.css';

//Assets
import plusImage from '../Assets/plus.svg';
import minusImage from '../Assets/minus.svg';

//Components
import CurrentHumidity from '../CurrentHumidity/CurrentHumidity';
import WindSpeed from '../WindSpeed/WindSpeed';
import Precipitation from '../Precipitation/Precipitation';
import WindDirection from '../WindDirection/WindDirection';

const CurrentWeatherDetails = () => {

    // const { weatherData } = useContext(WeatherContext);

    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="current-weather-details">
            <img src={isExpanded ? minusImage : plusImage} alt="expand/collapse sign" onClick={handleExpand} />
            {isExpanded && (
                <div className="expanded-weather-details">
                    
                        <CurrentHumidity />

                        <Precipitation />

                        <WindSpeed />

                        <WindDirection />
                    
                </div>
            )}
        </div>
    );
};

export default CurrentWeatherDetails;