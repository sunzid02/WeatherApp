import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/weatherActions';
import { AppDispatch } from '../redux/store';
import { getWeatherDescription } from '../utils/weatherUtils';

const Weather: React.FC = () => {
  const [location, setLocation] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  // Access weather state and error from Redux
  const { loading, temperature, description, windspeed, winddirection, isDay, weathercode, location: weatherLocation, error } = useSelector(
    (state: any) => state.weather || {}
  );

  const handleFetchWeather = () => {
    if (!location) {
      alert('Please enter a location.');
      return;
    }
    dispatch(fetchWeather(location));  // Dispatch action to fetch weather data
  };

  // Get weather icon based on the weather code
  const getWeatherIcon = (code: number) => {
    switch (code) {
      case 0:
        return <i className="fas fa-sun"></i>; // Clear sky icon
      case 1:
      case 2:
        return <i className="fas fa-cloud-sun"></i>; // Partly cloudy icon
      case 3:
      case 4:
        return <i className="fas fa-cloud"></i>; // Cloudy icon
      case 5:
      case 6:
      case 7:
        return <i className="fas fa-cloud-showers-heavy"></i>; // Rain icon
      case 8:
        return <i className="fas fa-bolt"></i>; // Thunderstorm icon
      case 9:
        return <i className="fas fa-smog"></i>; // Fog icon
      default:
        return <i className="fas fa-question-circle"></i>; // Unknown weather icon
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
        className="input"
      />
      <button onClick={handleFetchWeather} className="button">
        Get Weather
      </button>

      {loading && <div className="spinner"></div>}  {/* Display spinner while loading */}
      
      {/* Display error message if exists */}
      {error && <p className="error">Please enter a valid location</p>}

      {/* Display weather info when available */}
      {!loading && !error && temperature && (
        <div className="weather-cards">
          {/* Weather Description Card */}
          <div className="weather-card description-card">
            <h2>{weatherLocation}</h2>
            <div className="weather-icon">{getWeatherIcon(weathercode)}</div>
            <p>{description}</p>
          </div>

          {/* Temperature Card */}
          <div className="weather-card temperature-card">
            <h3>Temperature</h3>
            <p className="temp">{temperature}°C</p>
          </div>

          {/* Windspeed and Direction Card */}
          <div className="weather-card wind-card">
            <h3>Windspeed</h3>
            <p>{windspeed} km/h</p>
            <p>Wind Direction: {winddirection}°</p>
          </div>

          {/* Day/Night Card */}
          <div className="weather-card day-night-card">
            <h3>Day/Night</h3>
            <p>{isDay ? 'Day' : 'Night'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
