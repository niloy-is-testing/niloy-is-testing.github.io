export class Storage {
    static saveCity(city) {
        localStorage.setItem('lastCity', city);
    }
    static getLastCity() {
        return localStorage.getItem('lastCity');
    }
}