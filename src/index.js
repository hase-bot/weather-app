let apiKey = "5c4d88bba0f02819f5f9cbd942dedf59";
let city = "Zurich"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;


function showTemperature(response) {
let temperaturetoday = Math.round(response.data.main.temp);
let temperatureElement = document.querySelector("#temperaturetoday");
temperatureElement.innerHTML = `${temperaturetoday}°C`;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);