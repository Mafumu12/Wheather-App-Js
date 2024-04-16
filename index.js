let api_url = 'https://api.openweathermap.org/data/2.5/weather?q=lusaka&appid=';
const api_key = '54813013ff19d5af72eeee5ec104abe2';
const units ='&units=metric&q=';
let city;
let url  = api_url +api_key+ units +city;
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
 
async function checkWeather(city)
{
    const response = await fetch(url); 
    let data = await response.json();
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + 'ºC';
    document.querySelector('.city').innerHTML =  data.name;
    document.querySelector('.humidity').innerHTML = Math.floor(data.main.humidity) + '%';
    document.querySelector('.wind').innerHTML = Math.floor(data.wind.speed) + 'Km/h';
    document.querySelector('.weather').style.display = 'block';
    console.log(data);
}

function getCity()
{   
    checkWeather(searchBox.Value);
}
searchBtn.addEventListener("click", getCity);
