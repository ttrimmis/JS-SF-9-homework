/* 
    1. Sign up for openweathermap.org and generate an API key.
    2. Create a fetch request to pull current weather data for San Francisco.
       (Hint: http://api.openweathermap.org/data/2.5/weather?q=...).
    3. Log the temperature to the console. Note that the temperature will be in
       Kelvin.
    4. Incorporate the following code into your app to log a Fahrenheit value for 
       the temperature to the console (Fahrenheit temperature is stored in the 
       degFInt variable):
       const degF = (temp - 273.15) * 1.8 + 32;
       const degFInt = Math.floor(degF);
    5. Use DOM manipulation to add the returned temperature to the span element with
       the id "temp".
    6. Sign up for developer.weatherunlocked.com and obtain your application ID and 
       application key.
    7. Repeat the above steps to obtain the current temperature from this data 
       source, convert it to Fahrenheit, log it to the console, and then add it to 
       the DOM (uncomment out the 3 lines indicated in index.html for this step,
       and add your temperature value to the span element with the id "temp2").
    8. Refactor your code as necessary to separate the code for DOM manipulation
       from the code for sending an HTTP request.

    BONUS 1: Refactor your code to use jQuery (either $.ajax or $.get) instead of 
       Fetch to pull current weather data.
    BONUS 2: Implement a form that prompts users for a city and state and returns
       data for the location they specify 
       (Uncomment out the existing form code in index.html as marked).
    BONUS 3: The response data for each request includes the name of an image
       file that illustrates current weather conditions. Use the documention to
       figure out the URL for these files on the server, and then incorporate
       this image into the DOM.
 */

'use strict';

// For openweathermap.org
const weatherUrlOpenWeatherMap = 'http://api.openweathermap.org/data/2.5/weather?id=5391997&APPID=';

fetch(weatherUrlOpenWeatherMap).then(function(result) {
    if (result.ok) {
        console.log(result.statusText);
    }
    else {
        console.log('There was a problem with the request');
    }
}).then(function(data) {
    $.getJSON(weatherUrlOpenWeatherMap, function (result) {
        const weather = (result.main.temp);
        const degF = (weather - 273.15) * 1.8 + 32;
        const degFInt = Math.floor(degF);
        $('#temp').append(degFInt + ' \xB0F');
        //console.log(degFInt);
    });
});

// The below in jQuery without the fetch request - (This worked too).
/*
$(document).ready(function () {
    $.getJSON(weatherUrlOpenWeatherMap, function (result) {
        const weather = (result.main.temp);
        const degF = (weather - 273.15) * 1.8 + 32;
        const degFInt = Math.floor(degF);
        $('#temp').append(degFInt + ' \xB0F');
        //console.log(degFInt);
    });
}); 
*/

// For WeatherUnlocked.com
const weatherUrlWeatherUnlocked = 'http://api.weatherunlocked.com/api/current/us.94104?app_id=1e00f6cb&app_key=';

fetch(weatherUrlWeatherUnlocked).then(function(result) {
    if (result.ok) {
        console.log(result.statusText);
    }
    else {
        console.log('There was a problem with the request');
    }
}).then(function(data) {
    $.getJSON(weatherUrlWeatherUnlocked, function (result) {
        const weather = (result.temp_f);
        const rounded = Math.round(weather);
        $('#temp2').append(rounded + ' \xB0F');
        //console.log(weather);
    });
});