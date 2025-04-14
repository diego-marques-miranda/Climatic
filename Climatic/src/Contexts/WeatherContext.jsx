import {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import clearSkyDayIcon from '../assets/Icons/clearSky-Day.svg';
import clearSkyNightIcon from '../assets/Icons/clearSky-Night.svg';
import cloudyDayIcon from '../assets/Icons/cloudy-Day.svg';
import cloudyNightIcon from '../assets/Icons/cloudy-Night.svg';
import overcastIcon from '../assets/Icons/overcast.svg';
import rainyIcon from '../assets/Icons/rainy.svg';
import snowyIcon from '../assets/Icons/snowy.svg';
import thunderIcon from '../assets/Icons/thunder.svg';


export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState('São Paulo');
    const [latitude, setLatitude] = useState(null);  
    const [longitude, setLongitude] = useState(null);  
    const [currentWeather, setCurrentWeather] = useState(null);
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [dailyForecast, setDailyForecast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const geocodeCity = async (cityName) => {
        setLoading(true);
        setError(null);
        try {
            const geocodingApiUrl = `https://nominatim.openstreetmap.org/search?q=${cityName}&format=jsonv2`; 
            const response = await axios.get(geocodingApiUrl);
            if (response.data && response.data.length > 0) {
                setLatitude(parseFloat(response.data[0].lat));
                setLongitude(parseFloat(response.data[0].lon));
                setCity(cityName); // Atualiza o nome da cidade para o que foi geocodificado
                return { lat: parseFloat(response.data[0].lat), lon: parseFloat(response.data[0].lon) };
            } else {
                setError({ message: `Cidade "${cityName}" não encontrada.` });
                return null;
            }
        } catch (err) {
            setError(err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const fetchWeatherData = async (lat, lon) => {
        setLoading(true);
        setError(null);
        try {
            const currentWeatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;
            const hourlyForecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&forecast_hours=6&timezone=auto`;
            const days = 3;
            const dailyForecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max,weathercode&forecast_days=${days}&timezone=auto`;
            
            const [currentResponse, hourlyResponse, dailyResponse] = await Promise.all([
                axios.get(currentWeatherUrl),
                axios.get(hourlyForecastUrl),
                axios.get(dailyForecastUrl),
            ]);

            setCurrentWeather(currentResponse.data.current_weather);
            setHourlyForecast(hourlyResponse.data.hourly);
            setDailyForecast(dailyResponse.data.daily);

        } catch (err) {
            setError(err);
            setCurrentWeather(null);
            setHourlyForecast([]);
            setDailyForecast([]);
        } finally {
            setLoading(false);
        }
    };

    const updateCity = async (newCity) => {
        const coordinates = await geocodeCity(newCity);
        if (coordinates) {
            await fetchWeatherData(coordinates.lat, coordinates.lon);
        }
    };

    useEffect(() => {
        updateCity(city);
    }, []);

    useEffect(() => {
        
        if (city !== null)
        {
            console.log(`Current city: ${city}`);
        }
        
    }, [city]);

    useEffect(() => {

        if (latitude !== null && longitude !== null)
        {
            console.log(`Current coordinates: ${latitude} , ${longitude}`);

            fetchWeatherData(latitude, longitude);
        }

    }, [latitude, longitude]);

    useEffect(() => {
        if (currentWeather !== null)
        {
            console.log(`Current weather - ${city} - ${currentWeather.time}`);
            console.log(`Temperature: ${currentWeather.temperature} - Weather code: ${currentWeather.weathercode}`);
        }
    }, [currentWeather]);

    useEffect(() => {
        if (Array.isArray(hourlyForecast) && hourlyForecast.time && hourlyForecast.time.length > 0)
        {
            for (let i = 0; i < 6; i++)
            {
                console.log(`Time: ${hourlyForecast.time[i]} - Temperature: ${hourlyForecast.temperature_2m[i]} - Weather code: ${hourlyForecast.weathercode[i]}`);
            }
        }
    }, [hourlyForecast]);

    useEffect(() => {
        if (dailyForecast !== null)
        {
            for (let i = 0; i < 3; i++)
            {
                console.log(`Day: ${dailyForecast.time[i]} - Temperature max: ${dailyForecast.temperature_2m_max[i]} - Temperature min: ${dailyForecast.temperature_2m_min[i]} - Precipitation %: ${dailyForecast.precipitation_probability_max[i]} - UV index: ${dailyForecast.uv_index_max[i]} - Weather code: ${dailyForecast.weathercode[i]}`);
            }
        }
    }, [dailyForecast]);
    
    function IconSelector(weatherCode, isDay)
    {
        switch (weatherCode)
        {
            case 0:
                return isDay ? clearSkyDayIcon : clearSkyNightIcon;
            
            case 1:
            case 2:
                return isDay ? cloudyDayIcon : cloudyNightIcon;
            case 3:
            case 45:
            case 48:
                return overcastIcon;

            case 51:
            case 53:
            case 55:
            case 56:
            case 57:
            case 61:
            case 63:
            case 65:
            case 66:
            case 67:
            case 80:
            case 81:
            case 82:
                return rainyIcon;

            case 71:
            case 73:
            case 75:
            case 77:
            case 85:
            case 86:
                return snowyIcon;
                
            case 95:
            case 96:
            case 99:
                return thunderIcon;
        }
    }

    function getWeatherDescription(weatherCode) {
        switch (weatherCode) {
            case 0:
                return "Clear sky";
            case 1:
                return "Mainly clear";
            case 2:
                return "Partly cloudy";
            case 3:
                return "Overcast";
            case 45:
                return "Fog";
            case 48:
                return "Depositing rime fog";
            case 51:
                return "Light drizzle";
            case 53:
                return "Moderate drizzle";
            case 55:
                return "Heavy drizzle";
            case 56:
                return "Light freezing drizzle";
            case 57:
                return "Heavy freezing drizzle";
            case 61:
                return "Slight rain";
            case 63:
                return "Moderate rain";
            case 65:
                return "Heavy rain";
            case 66:
                return "Light freezing rain";
            case 67:
                return "Heavy freezing rain";
            case 71:
                return "Slight snow fall";
            case 73:
                return "Moderate snow fall";
            case 75:
                return "Heavy snow fall";
            case 77:
                return "Snow grains";
            case 80:
                return "Slight rain showers";
            case 81:
                return "Moderate rain showers";
            case 82:
                return "Violent rain showers";
            case 85:
                return "Slight snow showers";
            case 86:
                return "Heavy snow showers";
            case 95:
                return "Slight or moderate thunderstorm";
            case 96:
                return "Thunderstorm with slight hail";
            case 99:
                return "Thunderstorm with heavy hail";
            default:
                return "Unknown weather code";
        }
    }
    
    return (
        <WeatherContext.Provider value={{ city, currentWeather, hourlyForecast, dailyForecast, loading, error, updateCity, IconSelector, getWeatherDescription}}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherContext;