import axios from 'axios';

import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE, CLEAR_WEATHER_ERROR } from '../types/actionTypes';  // Import action types

import { getWeatherDescription } from '../utils/weatherUtils';  // Correct import

export const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST,
});

export const fetchWeatherSuccess = (data: any) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data,  // Payload now includes all weather data
});

export const fetchWeatherFailure = (error: string) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});


// New action to clear error state
export const clearWeatherError = () => ({
  type: CLEAR_WEATHER_ERROR,
});

export const fetchWeather = (location: string) => {
  return async (dispatch: any) => {
    dispatch(fetchWeatherRequest());  // Set loading to true

    
    // Dispatch action to clear previous errors
    dispatch(clearWeatherError());

    try {
      // Fetch latitude and longitude using a geocoding API
      const geocodingResponse = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
          q: location,
          key: 'b03e4aa2b1d3488a952e3ba28a323fa9',  // Replace with your OpenCage API key
        },
      });

 
      const { lat, lng } = geocodingResponse.data.results[0].geometry; // Get latitude and longitude from geocoding result

      // Now use these coordinates to fetch weather data
      const weatherResponse = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
        params: {
          latitude: lat,
          longitude: lng,
          current_weather: true,
        },
      });

      const { current_weather, latitude, longitude } = weatherResponse.data;

      // Use the getWeatherDescription function to map weatherCode to a description
      const description = getWeatherDescription(current_weather.weathercode);

      const weatherData = {
        latitude,
        longitude,
        temperature: current_weather.temperature,
        windspeed: current_weather.windspeed,
        winddirection: current_weather.winddirection,
        description,  // Use the description from the mapping function
        isDay: current_weather.is_day,
        weathercode: current_weather.weathercode,
        location,  // Save the location as well
      };

      dispatch(fetchWeatherSuccess(weatherData));
    }
     catch (error) {
     // Type narrowing to check if error is an instance of Error
      const errorMessage = error instanceof Error ? error.message : String(error);
      dispatch(fetchWeatherFailure(errorMessage));  // Handle error

    }
  };
};
