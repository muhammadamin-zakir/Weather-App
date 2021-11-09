import { Request } from "./request.js";
import { UI } from "./ui.js";


const cityName = document.getElementById("search");
const url = "https://api.openweathermap.org/data/2.5/weather?q";
const key = "b46dc966f5872407e2af30f72deab602";

//yüklendiğinde de istanbulun hava durumunu göstermesi için.
document.addEventListener("DOMContentLoaded", onLoadedBody);

function onLoadedBody() {
    const request = new Request(url, key, "istanbul");
    request.get()
        .then(response => {
            ui.addToUI(response);
        })
        .catch(err => console.log(err));
}



//inputa göre hava durumu

cityName.addEventListener("keypress", keyPressed);
const ui = new UI();

function keyPressed(e) {
    if (e.code == "Enter") {
        const request = new Request(url, key, cityName.value);
        request.get()
            .then(response => {
                ui.addToUI(response);
            })
            .catch(err => console.log(err));
    }
}