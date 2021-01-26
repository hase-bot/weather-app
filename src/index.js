function search(event) {
    event.preventDefault();
    let searchInput=document.querySelector("#search-text-input");
    let h2=document.querySelector("h2");
    h2.innerHTML=`${searchInput.value}`;
}

let apiKey = "5c4d88bba0f02819f5f9cbd942dedf59";
let city = "#search-text-input";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function showTemperature(response) {
console.log(response);
}

axios.get(apiUrl).then(showTemperature);