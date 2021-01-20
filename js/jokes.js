const url = 'https://icanhazdadjoke.com/'; // Public URL API
let notification= document.querySelector('#content');

function generate(){
//We use in Javascript the method fetch() in order to POST/GET/PUT/PATCH/DELETE data from the API provided. This method returns a PROMISE
    fetch(url , {
        method: 'GET',   // The GET operation is defined because we want to SEE the data from the API
        headers: {
            'Accept': 'application/json',
        }
    })      
        .then(response => response.json()) //The .THEN() method returns an OBJECT 
        // ******** EXERCICE 1 ********
        .then(data => {
            console.log(data);
            notification.innerHTML= `${data.joke}` 
        })
    }
    //The .CATCH() method is used to see if there's any problem
    // .catch(error => console.log("error!"))

