import axios from 'axios';

const API_KEY = '700678df7e1b4aeb871103539242201';
const API_URL = 'http://api.weatherapi.com/v1';



async function getWeatherData(location) {
    try {
        const response = await axios.get(`${API_URL}/current.json`, {
            params: {
                key: API_KEY,
                q: location,
            },
        });

        return response.data;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

async function getForecastData(location) {
    try {
        const response = await axios.get(`${API_URL}/forecast.json`, {
            params: {
                key: API_KEY,
                q: location,
                days: 6,
            },
        });

        return response.data;

    } catch (error) {
        console.error('Error fetching forecast data:', error);
        throw error;
    }
}

export { getWeatherData, getForecastData };