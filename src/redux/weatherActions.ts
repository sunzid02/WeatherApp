import axios from 'axios';

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST,
});

export const fetchWeatherSuccess = (data: any) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data,
});

export const fetchWeatherFailure = (error: string) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});

export const fetchWeather = (location: string) => {
  return (dispatch: any) => {
    dispatch(fetchWeatherRequest());  // Set loading to true

    axios
      .get(`https://api.open-meteo.com/v1/forecast`, {
        params: {
          latitude: 52.52, // Example latitude (Berlin)
          longitude: 13.4, // Example longitude (Berlin)
          current_weather: true,
        },
      })
      .then((response) => {
        const { current_weather } = response.data; // Access the current_weather object
        const weatherData = {
          temperature: current_weather.temperature,
          description: getWeatherDescription(current_weather.weathercode), // Map weather code to description
        };
        dispatch(fetchWeatherSuccess(weatherData));  // Update state with weather data
      })
      .catch((error) => {
        dispatch(fetchWeatherFailure(error.message));  // Handle error
      });
  };
};

// Function to map weather code to a description (you can expand this as needed)
const getWeatherDescription = (weatherCode: number) => {
  const weatherDescriptions: { [key: number]: string } = {
    3: 'Partly Cloudy', // Example: You can expand this with other codes
  };
  return weatherDescriptions[weatherCode] || 'Unknown weather';
};