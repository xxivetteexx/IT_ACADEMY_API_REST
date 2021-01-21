// -- API KEY -- //
const API_KEY = 'f424ea351c4a4b3fa0c192764745a865';

// When the page loads it requires the location
window.addEventListener('load', ()=> {
    let long; //Longitud
    let lat; // latitud
    let city = document.querySelector('.city');
    let temperature = document.querySelector('.temp');
    let descript = document.querySelector('.description');
    let humidity = document.querySelector('.humidity');
    let wind = document.querySelector('.wind');


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // -- API URL -- //
            const api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=${API_KEY}&include=minutely`;  

            fetch(api, {
                method: 'GET',   // The GET operation is defined because we want to SEE the data from the API
                headers: {
                    'Accept': 'application/json',
                    }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                //Getting the selected data from the API
                const {city_name}       = data[0].city_name;
                const {icon}            = data[0].weather.icon;
                const {description}     = data[0].weather.description;
                const {temp}            = data[0].temp;
                const {rh}              = data[0].rh; 
                const {wind_spd}        = data[0].wind_spd;

                console.log(city_name, icon, description, temp, rh, wind_spd);
                
                // Selected data from the API displayed on the website

                city.textContent        = `${data.city_name}`;
                temperature.textContent = `${data.temp}`;
                descript.textContent    = `${data.description}`;
                humidity.textContent    = `${data.rh}`;
                wind.textContent        = `${data.wind_spd}`;
  
  
              
             

            });
        })
    }else{
        h1.textContent= "Hey this is not working";
    };
      
});
