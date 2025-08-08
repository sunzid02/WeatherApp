import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/weatherActions';
import { AppDispatch } from '../redux/store';
import { log } from 'console';

const Weather: React.FC = () => {
  const [location, setLocation] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  


    // Access state and log it to verify the structure
  const weatherState = useSelector((state: any) => state.weather);
  console.log('Redux State:', weatherState);  // Log the entire state to check if temperature is available

  
  // Ensure the default value is an empty object if the state is undefined
  const { loading = false, temperature = '', description = '', error = null } = useSelector(
    (state: any) => state.weather || {} // Default to an empty object if state.weather is undefined
  );




  const handleFetchWeather = () => {
    dispatch(fetchWeather(location));  // Dispatching the action to fetch weather data
  };


  
  return (
    <div className="weather-container">
      {console.log(temperature + ' Temperature')}
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

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {temperature  && (
        <div className="weather-info">
          <h2>{location}</h2>
          <p>{description}</p>
          <p>{temperature}°C</p>
        </div>
      )}

      <p>sadasd</p>
    </div>
  );
};

export default Weather;
