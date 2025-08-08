# Weather App - React Dashboard

This is a **Weather App** built with **React** and **Redux**, designed to provide current weather information for locations in **Germany**. The app integrates the free **Open-Meteo API** to fetch accurate weather data.

## Features
- **Search for Weather by Location**: Users can enter the name of a location (e.g., Dortmund, Berlin) and view its weather details.
- **Accurate Weather Data**: The app fetches current weather data including temperature, wind speed, wind direction, and weather descriptions.
- **Responsive UI**: The app is fully responsive, and it adjusts the layout based on the screen size.
- **Weather Icons**: Displays corresponding weather icons based on the current weather condition (e.g., sunny, rainy, cloudy).
- **Background Image**: The app features a dynamic, weather-related background that adds a polished, professional look.

## Technologies Used:
- **React**: For building the user interface.
- **Redux**: For managing global state, including weather data and error handling.
- **Axios**: For making HTTP requests to the Open-Meteo API.
- **CSS3**: For styling the UI with responsive design and smooth animations.
- **FontAwesome**: For weather icons (sun, cloud, rain, etc.).

## How to Run the Project

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app

### 2. Install Dependencies
```bash
npm install

3. Run the App
bash
Copy
npm start
This will start the app on http://localhost:3000.

4. Open the App
Open the browser and visit http://localhost:3000 to see the weather data. Enter any location in Germany, such as Dortmund or Berlin, and the current weather will be displayed.

Features Breakdown:
1. Search for Weather:
Users can type a location in the search bar and click the "Get Weather" button.

The app displays the current temperature, wind speed, and description of the weather.

2. Error Handling:
If the entered location is invalid or if there’s a problem fetching data, an error message will be shown to the user.

3. Responsive Layout:
The app layout adjusts automatically on mobile screens, ensuring a clean and readable display of weather data.

4. Loading Spinner:
While the data is being fetched, a loading spinner is shown to indicate that the data is being loaded.

5. Day/Night Indicator:
The app shows whether it is currently day or night in the selected location.

6. Weather Icons:
Icons corresponding to different weather conditions are displayed alongside the weather data (e.g., sunny, rainy).

Video Demo
You can view the demo video of the Weather App in action by clicking on the link below. The video is stored in the public folder of this repository.

Watch the Demo

API Used
This app uses the Open-Meteo API to fetch weather data. The API provides free weather forecasts, including current weather data like temperature, wind speed, and more.

API Documentation: Open-Meteo API

Future Improvements:
Add a forecast for the next few days.

Implement user preferences to save frequently searched locations.

Integrate more detailed weather data like humidity, UV index, etc.

Improve error handling with more meaningful messages for various API errors.

Conclusion
This Weather App fulfills the requirements of the challenge and provides a modern, visually appealing, and user-friendly interface. With the integration of the Open-Meteo API, users can access accurate weather data for any location in Germany. The app also offers dynamic features like responsive design, loading spinners, and weather icons to enhance the user experience.

Thank you for reviewing my solution!

Additional Notes:
All icons are sourced from FontAwesome.

The app design uses modern CSS practices with grid layouts, flexbox, and smooth animations for hover effects.

A demo video of the Weather App in action is stored in the public folder of this repository, and it can be accessed via the link above.

How It Works
Weather Data Flow:
Search Location: The user inputs the name of the location (e.g., Dortmund) in the search bar and clicks the "Get Weather" button.

API Request: The app makes an API call to the Open-Meteo API to fetch the weather data for the specified location (including temperature, wind speed, weather description, and more).

Displaying Results: The weather data is then displayed dynamically in various cards (e.g., temperature, wind speed, weather description).

Error Handling: If an invalid location is entered or there's an issue with fetching the data, an error message is displayed to the user.

App Layout:
The app is designed using a grid layout with responsive behavior. The weather information is displayed in individual cards, each representing different aspects of the weather (e.g., temperature, wind speed). These cards have hover effects and animations for a more interactive experience.

Environment Setup:
Ensure you have Node.js installed. You can verify your installation by running:

bash
Copy
node -v
npm -v
If these commands show version numbers, you're good to go!
