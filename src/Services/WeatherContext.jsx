import React, { createContext, useState, useEffect } from 'react';
import getWeatherData from './WeatherService.js';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
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
        }
    }, [location]);

    return (
        <WeatherContext.Provider value={{ weatherData, setWeatherData, setLocation }}>
            {children}
        </WeatherContext.Provider>
    );
};