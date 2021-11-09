//örnek istanbul hava durumu anlık.
//https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=b46dc966f5872407e2af30f72deab602&units=metric&lang=tr

//url = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric&lang=tr
//key = b46dc966f5872407e2af30f72deab602 
//key'i bedava kullanmak için :"https://openweathermap.org/" sitesine kayıt olup ücretisiz olarak kullanabiliriz!

export class Request {
    constructor(url, key, cityName) {
        this.url = url;
        this.key = key;
        this.cityName = cityName;
    }

    async get() {
        const myLink = `${this.url}=${this.cityName}&appid=${this.key}&units=metric&lang=tr`;
        const response = await fetch(myLink);
        const responseData = await response.json();
        return responseData//promise döndürür
    }
}
