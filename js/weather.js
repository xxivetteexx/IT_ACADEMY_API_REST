const url = ' https://api.weatherbit.io/v2.0/current'; // Public Weather URL API
let weather = {
    "apiKey"= "f424ea351c4a4b3fa0c192764745a865",

    fetchWeather:function(){
        fetch(url , {
            method: 'GET',   // The GET operation is defined because we want to SEE the data from the API
            headers: {
                'Accept': 'application/json',
            }
        })
        .then(response => response.json())  
        .then(data => console.log(data))
    }

}