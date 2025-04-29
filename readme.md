# Weather App

A simple weather application built with vanilla JavaScript using modern ES6+ features and best practices. It is live at : https://niloy-is-testing.github.io/

## Features

- Interative map for getting weather data onclick.
- Search for weather by city name
- Displays temperature, weather description, humidity, and wind speed as weather data
- Responsive design for all devices 
- Saves the last searched city using local storage
- Modular code organization

## Project Structure

```
weather-app/
├── src/                        # Source code
|   ├── app.js                  # Main application controller
│   ├── components/             # JavaScript modules
│   │   ├── api                 # API interactions
            |── city.js
            └── map.js          
│   │   ├── ui/ui.js            # UI interactions
│   │   └── storage/storage.js  # Local storage operations
|── index.html                  # Main HTML file
|── search.html                 # search city 
|── index.css                   # Main styles
└── README.md                   # Project documentation
```

## Setup Instructions

1. Clone or download this repository
2. Get an API key from [OpenWeatherMap](https://openweathermap.org/api)
3. Open `src/api.js` and replace `YOUR_API_KEY_HERE` with your actual API key
4. Open `index.html` in your browser or use a local server

## API Used

This project uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data.

## Browser Compatibility

This application works in all modern browsers that support ES6+ features:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
