// -- API KEY -- //
const apiKey = 'f424ea351c4a4b3fa0c192764745a865';

// -- Variables declared -- //
let long;
let lat;
let city;
let temperature;
let iconography;
let descript;
let humidity;
let wind;

// -- Listener -- //
//A window will be open when the page is loading and will ask for geolocation permission
window.addEventListener('load', () => {
    loadWeather();
});

// Main function
async function loadWeather() {

    // 1. Get DOM elemements in order to  print response
    getDOMElements()

    // 2. Get location
    await getPosition()

    // 3. Get Weather
    let information = await getWeather()

    // 4. Print response
    printWeather(information)

}

// 1. Linking all the variables with HTML in this function.
function getDOMElements() {
    city = document.querySelector('.city');
    temperature = document.querySelector('.temp');
    iconography = document.querySelector('.icon');
    descript = document.querySelector('.description');
    humidity = document.querySelector('.humidity');
    wind = document.querySelector('.wind');
}

// 2. getPosition is already an async function because it uses a Promise (Promises are async). We get the geolocation of the user that allows start running the API
function getPosition() {
    return new Promise(function (resolve, reject) {
        function success(position) {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(position);
            resolve();
        };
        function error(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
            reject();
        };
        navigator.geolocation.getCurrentPosition(success, error);
    });
}

// 3. Async function for get the data from the API
async function getWeather() {
    // -- API WEATHER URL -- //
    let apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=${apiKey}&include=minutely`;
    let response = await fetch(apiUrl);
    let data = await response.json()
    return data;
}

// 4.  Async function will print the selected data from the API we used the API data stored in "information variable"
function printWeather(information) {
    //Getting the selected data from the API
    const city_name = information.data[0].city_name;
    const icon = information.data[0].weather.icon;
    const description = information.data[0].weather.description;
    const temp = information.data[0].temp;
    const rh = information.data[0].rh;
    const wind_spd = information.data[0].wind_spd;
    console.log(city_name,icon,description,temp,rh,wind_spd);


    // Selected data from the API displayed on the website

    city.innerHTML =  "<b>Weather in</b> " + `${information.data[0].city_name}`;
    temperature.innerHTML = `${information.data[0].temp}` + "°C";
    iconography.innerHTML = `${information.data[0].weather.icon}`;
    descript.innerHTML = `${information.data[0].weather.description}`;
    humidity.innerHTML = "<b>Humidity</b> " + `${information.data[0].rh}` + "%";
    wind.innerHTML = "<b>Wind speed</b> " + `${information.data[0].wind_spd}` + "km/h";
}