import React, { useState } from 'react';
import './CurrentWeatherDetails.css';
import plusImage from '../Assets/plus.svg';

const CurrentWeatherDetails = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="current-weather-details">
            <img src={plusImage} alt="plus sign that expand" onClick={handleExpand} />
            {isExpanded && (
                <div className="expanded-weather-details">
                    {/* components */}
                    <p>Components hamnar här</p>
                </div>
            )}
        </div>
    );
};

export default CurrentWeatherDetails;