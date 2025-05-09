<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 19f58f443f3d411d3c16fbe73e656b7ac3b9ddfc
const API_KEY = "1a19e7763c77142fd6b2b5cab6b6ec98"; 
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeatherData(city) {
<<<<<<< HEAD
=======
export async function fetchWeatherData(city) {
    const API_KEY = "1a19e7763c77142fd6b2b5cab6b6ec98"
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
>>>>>>> 21a8d76 (update content and structure of the app)
=======
>>>>>>> 19f58f443f3d411d3c16fbe73e656b7ac3b9ddfc
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found. Please check the spelling and try again.');
            } else {
                throw new Error('Failed to fetch weather data. Please try again later.');
            }
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}