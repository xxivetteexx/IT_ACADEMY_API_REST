// Public URL API
const url = 'https://icanhazdadjoke.com/';

//We use in Javascript the method fetch() in order to POST/GET/PUT/PATCH/DELETE data from the API provided. This method returns a PROMISE
fetch(url , {
    // The GET operation is defined because we want to SEE the data from the API
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    }
})      

//The .THEN() method returns an OBJECT 
.then(response => response.json())

// ******** EXERCICE 1 ********
 .then(data => console.log(data)) 

// ******** EXERCICE 2 ********
.then(json => {
    let data = JSON.stringify(json)
    document.getElementById('demo').innerHTML = data;
  });


//The .CATCH() methodn is used to see if there's any problem
// .catch(error => console.log("error!"))

