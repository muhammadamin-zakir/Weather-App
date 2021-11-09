export class UI {
    constructor() {
        this.temp = document.querySelector(".temp");
        this.cityName = document.querySelector(".province");
        this.weatherForecast = document.querySelector(".description");
    }

    addToUI(response) {
        this.temp.innerHTML = response.main.temp;
        this.cityName.innerHTML = response.name;
        this.weatherForecast.innerHTML = response.weather[0].description;
    }

}