// -- API WEATHER URL -- //
const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=${apiKey}&include=minutely`;  

// -- API KEY -- //
const apiKey = 'f424ea351c4a4b3fa0c192764745a865';


// MAIN function
window.addEventListener('load', ()=> {

    // 1. Get DOM elemements in order to  print response 
    getDOMElements()

    // 2. Get location
    let location = await getPosition()

    // 3. Get Weather
    let weather = await getWeather(location)

    // 4. Print response
    printWeather(weather)
});


// 1. Function where we set our variables.
function getDOMElements(){
    let long; 
    let lat;
    let city            = document.querySelector('.city');
    let temperature     = document.querySelector('.temp');
    let iconography     = document.querySelector('.icon');
    let descript        = document.querySelector('.description');
    let humidity        = document.querySelector('.humidity');
    let wind            = document.querySelector('.wind');
    }

// 2. Async function for get the geolocation of the user and start running the API
async function getPosition(){
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
        });
}   
    
getPosition()
    .then((position ) => {
        long        = position.coords.longitude;
        lat         = position.coords.latitude;
        console.log(position);
    })
    
    .catch((err) => {
      console.error(err.message);
    });

// 3. Async function for get the data from the API
async function getWeather(location) {
    let response = await fetch(apiUrl, {
          method: 'GET',   // The GET operation is defined because we want to SEE the data from the API
          headers: {
              'Accept': 'application/json',
          }
  })
    let data = await response.json()
    return data;
  }
  
  getWeather()
    .then(data => console.log(data);



// 4.  Async function for print the selected data from the API
function printWeather(weather){
    //Getting the selected data from the API
    const city_name            = data.data[0].city_name;
    const icon                 = data.data[0].weather.icon;
    const description          = data.data[0].weather.description;
    const temp                 = data.data[0].temp;
    const rh                   = data.data[0].rh; 
    const wind_spd             = data.data[0].wind_spd;
    // console.log(city_name,icon,description,temp,rh,wind_spd);


    // Selected data from the API displayed on the website

    city.innerHTML           = `${data.data[0].city_name}`;
    temperature.innerHTML    = `${data.data[0].temp}` + "°C";
    iconography.innerHTML    = `${data.data[0].weather.icon}`;
    descript.innerHTML       = `${data.data[0].weather.description}`;
    humidity.innerHTML       = "<b>Humidity</b> " + `${data.data[0].rh}` + "%";
    wind.innerHTML           = "<b>Wind speed</b> " + `${data.data[0].wind_spd}` + "km/h";     
}