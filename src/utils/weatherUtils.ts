// src/utils/weatherUtils.ts

// Function to map WMO weather code to a human-readable description
export const getWeatherDescription = (weatherCode: number): string => {
  const weatherDescriptions: { [key: number]: string } = {
    0: 'Clear sky',
    1: 'Mainly clear (few clouds)',
    2: 'Partly cloudy',
    3: 'Cloudy',
    4: 'Overcast',
    5: 'Light rain',
    6: 'Moderate rain',
    7: 'Heavy rain',
    8: 'Thunderstorm',
    9: 'Fog',
  };
  
  return weatherDescriptions[weatherCode] || 'Unknown weather';
};
