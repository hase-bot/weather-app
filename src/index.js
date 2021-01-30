function showTemperature(response) {
  document.querySelector("h2").innerHTML = response.data.name;
  document.querySelector("#temperaturetoday").innerHTML = Math.round(
    response.data.main.temp);
}

function citySubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "5c4d88bba0f02819f5f9cbd942dedf59";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${response.data.name}&units=metric`;
  axios.get(`${apiURL}&appid=${apiKey}`).then(showTemperature);
}