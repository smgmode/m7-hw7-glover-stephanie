var mainSelection = document.getElementById('page-body');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    var apiResult = JSON.parse(this.responseText);

    //Code Dealing With The API Data Goes Here
console.log(apiResult);

console.log(mainSelection);

 }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=94103,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
