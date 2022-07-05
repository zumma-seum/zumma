const API_KEY = "177bd173ab7b0eb5dfe249e786f11069"
function onGeoOk(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        weather.innerText = `${data.weather[0].main}/${data.main.temp}°C     `
        city.innerText = data.name
    })
}
function onGeoError(){
    alert("Can't find you. No weather for you")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)