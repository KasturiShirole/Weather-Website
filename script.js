const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd9b3d80b75msh316277501c0224ap1ca9fbjsn90677e455273',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const getWeather = (city)=>{
    cityName.innerHTML=city
    fetch(url + city , options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
       // cloud_pct.innerHTML = response.cloud_pct
      //  temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
       // feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
       // humidity2.innerHTML = response.humidity
      //  min_temp.innerHTML = response.min_temp
      //  max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
      //  wind_speed2.innerHTML = response.wind_speed
      //  wind_degrees.innerHTML = response.wind_degrees
       // sunrise.innerHTML = response.sunrise
       // sunset.innerHTML = response.sunset

    })
    .catch(err => console.log(err))
}

searchBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(searchBox.value)
})

getWeather("Delhi")
