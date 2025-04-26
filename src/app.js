// Import modules
import { fetchWeatherData } from './components/api/api.js';
import { UI } from './components/ui/ui.js';
import { Storage } from './components/storage/storage.js';

class WeatherApp {
    constructor() {
        this.ui = new UI();
        
        // Initialize event listeners
        this.ui.searchBtn.addEventListener('click', () => this.searchWeather());
        this.ui.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.searchWeather();
            }
        });
  
        this.loadLastCity();
    }

    loadLastCity() {
        const lastCity = Storage.getLastCity();
        if (lastCity) {
            this.ui.setCity(lastCity);
            this.searchWeather();
        }
    }
    
    searchWeather() {
        const city = this.ui.getCity();
        
        if (!city) {
            this.ui.showError('Please enter a city name');
            return;
        }
        
        // Save the city to localStorage
        Storage.saveCity(city);
        
        // Show loading state (could add a loader here)
        this.ui.clearError();
        
        // Fetch weather data
        fetchWeatherData(city)
            .then(data => this.ui.displayWeatherData(data))
            .catch(error => {
                this.ui.showError(error.message);
            });
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new WeatherApp();
});