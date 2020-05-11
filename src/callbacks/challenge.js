const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API_URL = 'https://rickandmortyapi.com/api/character/';

//fetch es una implementacion que esta diponible desde es6
//en adelante, pero funciona internamente con promesas, pero
//voy a prescindir de su uso para empezar desde las bases
//de asincronismo de js

function fetchDataFromAPI(api_url, callback) {

    let xhttp = new XMLHttpRequest(); //originalmente por micrsosft (standard)
    
    //le pasamos la peticion, el tercer valor
    //es activar asincronismo (default true)
    xhttp.open('GET', api_url, true);
    
    //escuchando cambios de estado
    xhttp.onreadystatechange = function (event) {
        if ( xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + api_url);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchDataFromAPI(API_URL, function(err1, data1) {
    if(err1)
        return console.log(err1);
    
    fetchDataFromAPI(API_URL + data1.results[0].id, function (err2, data2) {
        if(err2)
            return console.log(err2);

        fetchDataFromAPI(data2.origin.url, function (err3, data3) {
            if(err3)
                return console.log(err3);
            
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});