 const urlApi = 'https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=f424ea351c4a4b3fa0c192764745a865&include=minutely'; // Public Weather URL API



// -------> We create the weather object in order to get the Weather API Data
let weather = {
    apiKey: "f424ea351c4a4b3fa0c192764745a865", //The API gives us this api KEY

    // fetch function in order receive the API data   
    fetchWeather: function(city_name){
        fetch(urlApi, {
            method: 'GET',   // The GET operation is defined because we want to SEE the data from the API
            headers: {
                 'Accept': 'application/json',
            }
        })
        .then(response => response.json())  
        .then(data => console.log(data))
        // .then(data => this.displayWeather(data));
    }

    