const apiKey = '14c964f2cc58a1c55b8e5e9f2f1f8680';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchIcon');
const weatherIcon = document.querySelector('.weatherIcon')

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity1').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind1').innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main== 'Clouds'){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main== 'Rain'){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main== 'Snow'){
        weatherIcon.src = "images/Snow.png"
    }
    else if(data.weather[0].main== 'Mist'){
        weatherIcon.src = "images/mist.png"
    }
    else if(data.weather[0].main== 'Drizzle'){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main== 'Clear'){
        weatherIcon.src = "images/clear.png"
    };

    // document.querySelector('.air').style.display = "block";
}

window.addEventListener('load', ()=>{
    checkWeather("new york");
})

searchBox.addEventListener('keypress', (e)=>{
    if(e.key==='Enter'){
        checkWeather(searchBox.value);
        console.log("keypressed")
    }
})
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})




