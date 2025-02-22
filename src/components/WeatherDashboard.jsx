import React, { useState } from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import './WeatherDashboard.css';

const WeatherDashboard = () => {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');
  const [forecastIndex, setForecastIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';

  const fetchWeather = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setIsLoading(true);
      
      // Fetch current weather
      const currentResponse = await axios.get(
        `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      // Fetch 5-day forecast
      const forecastResponse = await axios.get(
        `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      setCurrentWeather(currentResponse.data);
      
      // Filter forecast data for one reading per day
      const dailyForecast = forecastResponse.data.list.filter(
        (reading, index) => index % 8 === 0
      );
      setForecast(dailyForecast);
    } catch (err) {
      setError('City not found. Please try again.');
      setCurrentWeather(null);
      setForecast([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCityInput = (e) => {
    // Only allow letters and spaces
    const value = e.target.value.replace(/[^A-Za-z\s]/g, '');
    setCity(value);
  };

  return (
    <div className="weather-dashboard">
      <h1>Weather Dashboard</h1>
      
      {/* Search Form */}
      <form onSubmit={fetchWeather}>
        <input
          type="text"
          value={city}
          onChange={handleCityInput}
          placeholder="Enter city name"
          pattern="[A-Za-z\s]+"
          title="Please enter only letters and spaces"
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Error Message */}
      {error && <div className="error">{error}</div>}

      {/* Loading Spinner */}
      {isLoading && <LoadingSpinner />}

      {/* Current Weather */}
      {!isLoading && currentWeather && (
        <div className="current-weather">
          <h2>{currentWeather.name}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
            alt={currentWeather.weather[0].description}
          />
          <p>Temperature: {Math.round(currentWeather.main.temp)}°C</p>
          <p>Humidity: {currentWeather.main.humidity}%</p>
          <p>{currentWeather.weather[0].description}</p>
        </div>
      )}

      {/* Forecast Carousel */}
      {!isLoading && forecast.length > 0 && (
        <div className="forecast">
          <div className="forecast-buttons">
            <button
              onClick={() => setForecastIndex(Math.max(0, forecastIndex - 1))}
              disabled={forecastIndex === 0}
            >
              ←
            </button>
            <button
              onClick={() => setForecastIndex(Math.min(forecast.length - 3, forecastIndex + 1))}
              disabled={forecastIndex >= forecast.length - 3}
            >
              →
            </button>
          </div>
          
          <div className="forecast-cards">
            {forecast.slice(forecastIndex, forecastIndex + 3).map((day) => (
              <div key={day.dt} className="forecast-card">
                <h3>{new Date(day.dt * 1000).toLocaleDateString()}</h3>
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt={day.weather[0].description}
                />
                <p>Temp: {Math.round(day.main.temp)}°C</p>
                <p>Humidity: {day.main.humidity}%</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard; 