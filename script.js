const apiKey = "df2fddf8f17e204e84d42e972428633d";
const URL = `https://api.openweathermap.org/data/2.5/weather?id=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function fetchApi (city) {
    const response = await fetch (URL + city + `&appid=${apiKey}`);
    const Data = await response.json();
    console.log(Data);

    document.querySelector(".city").innerHTML = Data.name ;
    document.querySelector(".temp").innerHTML = Math.round(Data.main.temp) + "°C" ;
    document.querySelector(".humidity").innerHTML = Data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Data.send.speed + " km/h";
    

    if(Data.weather[0].main == "clouds"){
       weatherIcon.src = "./images/cloudy.png"
    }else if(Data.weather[0].main == "clear"){
        weatherIcon.src = "./images/sun.png"
     }else if(Data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rainy-day.png"
     }else if(Data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png"
     }else if(Data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/fog.png"
     }

}

searchBtn.addEventListener("click" , ()=>{
    fetchApi(searchBox.value);
})
fetchApi();