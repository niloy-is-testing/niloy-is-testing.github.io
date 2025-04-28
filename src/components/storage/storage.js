// Functions to handle Storage
function saveCity(city) {
    localStorage.setItem('lastCity', city);
}

function getLastCity() {
    return localStorage.getItem('lastCity');
}

// Export functions as part of an object
export const Storage = {
    saveCity,
    getLastCity,
};
