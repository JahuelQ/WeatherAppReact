import React, { createContext, useState, useEffect } from 'react';
import { getWeatherData, getForecastData } from './WeatherService.js';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setLocation(`${latitude},${longitude}`);
        });
    }, []);

    useEffect(() => {
        if (location) {
            getWeatherData(location)
                .then(data => setWeatherData(data))
                .catch(error => console.error(error));

            getForecastData(location)
                .then(data => setForecastData(data))
                .catch(error => console.error(error));
        }
    }, [location]);

    return (
        <WeatherContext.Provider value={{ weatherData, setWeatherData, forecastData, setForecastData, setLocation }}>
            {children}
        </WeatherContext.Provider>
    );
};