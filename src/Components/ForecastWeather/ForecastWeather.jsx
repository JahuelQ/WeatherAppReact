import React, { useContext } from 'react';
import { WeatherContext } from '../../Services/WeatherContext.jsx';

//CSS
import './ForecastWeather.css';

const ForecastWeather = () => {
  const { forecastData } = useContext(WeatherContext);

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { weekday: 'long' });
  };

  return (
    <div className='forecast-container'>
      {forecastData && forecastData.forecast && forecastData.forecast.forecastday.slice(1, 6).map((day, index) => (
        <div className='forecast-day' key={index}>
          <h2 className='day-number'>{getDayOfWeek(day.date)}</h2>
          <p className='temperature high'>High: {day.day.maxtemp_c}°C</p>
          <p className='temperature low'>Low: {day.day.mintemp_c}°C</p>
        </div>
      ))}
    </div>
  );
}

export default ForecastWeather;