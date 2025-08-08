import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE, CLEAR_WEATHER_ERROR } from '../types/actionTypes';  // Import action types


import { WeatherState } from '../types/weatherState';

const initialState: WeatherState = {
  latitude: 0,
  longitude: 0,
  temperature: null,
  windspeed: 0,
  winddirection: 0,
  description: '',
  isDay: 0,
  weathercode: 0,
  location: '',
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, action: any): WeatherState => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true, // Set loading to true when the request is made
      };

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        temperature: action.payload.temperature,
        windspeed: action.payload.windspeed,
        winddirection: action.payload.winddirection,
        description: action.payload.description,
        isDay: action.payload.isDay,
        weathercode: action.payload.weathercode,
        location: action.payload.location,
        loading: false, // Set loading to false when data is fetched
      };

    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false, // Set loading to false when there's an error
        error: action.payload,
      };

    case CLEAR_WEATHER_ERROR:
      return {
        ...state,
        error: null,  // Clear the error state
      };

    default:
      return state;
  }
};

export default weatherReducer;
