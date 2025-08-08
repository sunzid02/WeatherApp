# Weather App - React Dashboard

## Project Overview

The **Weather App** provides current weather information for locations in **Germany**. Built with **React** and **Redux**, the app fetches weather data from the **Open-Meteo API** and uses the **OpenCage Geocoding API** for location search. It displays detailed weather information such as temperature, wind speed, wind direction, and weather conditions in a user-friendly interface.

## Features

- Search for weather by location name (e.g., Dortmund, Berlin)
- Display current weather data: temperature, wind speed, wind direction, and description
- Responsive design for mobile and desktop views
- Dynamic weather icons based on weather conditions (e.g., sunny, rainy)
- Background image changes based on weather conditions
- Error handling for invalid locations and failed API requests

## Technology Stack

### Frontend

- **React**: For building the user interface.
- **Redux**: For managing global state, including weather data and error handling.
- **Axios**: For making HTTP requests to the Open-Meteo and OpenCage APIs.
- **CSS3**: For styling the UI with responsive design and smooth animations.
- **FontAwesome**: For weather icons (sun, cloud, rain, etc.).

### APIs Used

- **Open-Meteo API**: Provides free weather forecasts, including current weather data (temperature, wind speed, etc.).
  - **API Documentation**: [Open-Meteo API](https://open-meteo.com)
  
- **OpenCage Geocoding API**: Converts location names into latitude and longitude coordinates for accurate weather data fetching.
  - **API Documentation**: [OpenCage API](https://opencagedata.com)

## Directory Structure

### Frontend

```bash
frontend/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── actions/
│   ├── components/
│   ├── reducers/
│   ├── App.js
│   ├── index.js
│   └── store.js
├── package.json
└── README.md


### Backend (if applicable)

For this project, there is no separate backend as the app directly fetches data from the Open-Meteo and OpenCage APIs.

## Getting Started

### Prerequisites

Ensure you have installed:

- **Node.js** and **npm**

### Installation and Setup

#### Frontend

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the React development server:
    ```bash
    npm start
    ```
    This will start the app on [http://localhost:3000](http://localhost:3000).



## Usage

### After the development server is running
Navigate to [http://localhost:3000](http://localhost:3000) in your browser to use the Weather App. Enter any location in Germany (e.g., Dortmund or Berlin), and the app will display the current weather data for that location.
