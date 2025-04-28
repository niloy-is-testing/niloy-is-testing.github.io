import { fetchWeatherData } from './components/api/api.js';
import { UI } from './components/UI/UI.js';
import { Storage } from './components/storage/storage.js';

// DOMContentLoaded ensures that the JavaScript doesn’t run before the HTML is ready to be manipulated (no undefined elements).
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadLastCity();
});

function setupEventListeners() {
    UI.searchBtn.addEventListener('click', searchWeather);
    UI.cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchWeather();
        }
    });
}

function searchWeather() {
    const city = UI.getCity();
    if (!city) {
        UI.showError('Please enter a city name');
        return;
    }
    Storage.saveCity(city);
    UI.clearError();
    fetchWeatherData(city)
        .then(data => UI.displayWeatherData(data))
        .catch(error => {
            UI.showError(error.message);
        });
}

function loadLastCity() {
    const lastCity = Storage.getLastCity();
    if (lastCity) {
        UI.setCity(lastCity);
        searchWeather();
    }
}






