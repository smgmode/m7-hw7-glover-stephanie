//Define Global Variables
var city = document.querySelectorAll('#city-name p span');

var clime = document.querySelectorAll('#climate p span');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    var apiResult = JSON.parse(this.responseText);

    //Code Dealing With The API Data Goes Here - Pull in the city name
var name = document.createTextNode(apiResult.name);
city[0].appendChild(name);

console.log(apiResult.weather);
var weather = document.createTextNode(apiResult.weather);
clime[0].appendChild(weather);

 }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=94103,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
