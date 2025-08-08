import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from './weatherActions';

interface WeatherState {
  temperature: string;
  description: string;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  temperature: '',
  description: '',
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, action: any): WeatherState => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,  // Set loading to true when the API call is made
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        temperature: action.payload.temperature,
        description: action.payload.description,
        loading: false,  // Set loading to false when data is fetched successfully
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,  // Set loading to false if there's an error
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
