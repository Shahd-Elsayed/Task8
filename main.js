const startBaseUrl="https://api.weatherapi.com/v1/current.json?key=9fa7a4a9465442a182e134825232804&q=";
let userLocation= document.getElementById("locationInput");
let viewWeatherButton=document.getElementById("viewWeatherButton");
const  endBaseUrl="&aqi=no";
let container=[];


async function getData(location){
    let response=await fetch(`${startBaseUrl}${location}${endBaseUrl}`);
    response=await response.json();
    container=response
}


viewWeatherButton.addEventListener('click',()=>{
        if(userLocation.value==""||userLocation.value==null){
            alert("Please enter location.")
        }else{
        getData(userLocation.value);
        let main =document.getElementById("main");
        main.innerHTML =`<div class="viewLocatonWeather">
            <h1>${container.location.name}</h1>
            <img src="${container.current.condition.icon}" alt="iconImage">
            <h3><span class="title">Region: </span> ${container.location.region}</h3>
            <h3><span class="title">Country: </span> ${container.location.country}</h3>
            <!-- <h3><span class="title">Condition: </span>  ${container.current.condition.text}</h3> -->
            <h3><span class="title">wind_mph: </span>${container.current.wind_mph}</h3>
            <h3><span class="title">Temprature(c): </span>  ${container.current.temp_c}</h3>
            <h3><span class="title">Humidity: </span>  ${container.current.humidity}</h3>
            </div>`
        }
})
