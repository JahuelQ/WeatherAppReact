import React, { useState, useContext } from 'react';

import { WeatherContext } from '../../Services/WeatherContext.jsx';

//CSS
import './CurrentWeatherDetails.css';

//Assets
import plusImage from '../Assets/plus.svg';
import minusImage from '../Assets/minus.svg';

//Components
import CurrentHumidity from '../CurrentHumidity/CurrentHumidity';

const CurrentWeatherDetails = () => {

    const { weatherData } = useContext(WeatherContext);

    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="current-weather-details">
            <img src={plusImage} alt="plus sign that expand" onClick={handleExpand} />
            {isExpanded && (
                <div className="expanded-weather-details">
                    {
                        <CurrentHumidity weatherData={weatherData} />
                    
                    }
                </div>
            )}
        </div>
    );
};

export default CurrentWeatherDetails;