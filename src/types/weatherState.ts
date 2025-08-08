// Define the structure of the weather state
export interface WeatherState {
  latitude: number;
  longitude: number;
  temperature: null;
  windspeed: number;
  winddirection: number;
  description: string;
  isDay: number;
  weathercode: number;
  location: string;
  loading: boolean;
  error: string | null;
}
