export class UI {
    constructor() {
        // Cache DOM elements
        this.cityInput = document.getElementById('city-input');
        this.searchBtn = document.getElementById('search-btn');
        this.errorContainer = document.getElementById('error-container');
        this.weatherContainer = document.getElementById('weather-container');
        this.cityNameElement = document.getElementById('city-name');
        this.temperatureElement = document.getElementById('temperature');
        this.weatherDescriptionElement = document.getElementById('weather-description');
        this.humidityElement = document.getElementById('humidity');
        this.windSpeedElement = document.getElementById('wind-speed');
    }

    displayWeatherData(data) {
        // Extract data
        const cityName = data.name;
        const country = data.sys.country;
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        
        // Update UI
        this.cityNameElement.textContent = `${cityName}, ${country}`;
        this.temperatureElement.textContent = `${temperature}°C`;
        this.weatherDescriptionElement.textContent = description;
        this.humidityElement.textContent = `${humidity}%`;
        this.windSpeedElement.textContent = `${windSpeed} m/s`;
        
        // Show weather container
        this.weatherContainer.style.display = 'block';
    }
    
    showError(message) {
        this.errorContainer.textContent = message;
        this.errorContainer.style.display = 'block';
        this.weatherContainer.style.display = 'none';
    }

    clearError() {
        this.errorContainer.textContent = '';
        this.errorContainer.style.display = 'none';
    }
    
    getCity() {
        return this.cityInput.value.trim();
    }

    setCity(city) {
        this.cityInput.value = city;
    }
}