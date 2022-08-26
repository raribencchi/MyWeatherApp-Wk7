function showCurrentWeather(response) {
  console.log(response.data);
    document.querySelector("#city").innerHTML = response.data.name;
    celsiusTemperature = response.data.main.temp;
    temp_min = response.main.temp_min;
    temp_max = response.main.temp_max;
    document.querySelector("#tempMinMax").innerHTML = Math.round(temp_min + "/" + temp_max);
    document.querySelector("#temperature").innerHTML = Math.round(celsiusTemperature);
    document.querySelector("#humidity").innerHTML =
      "Humidity:" + response.data.main.humidity + "%";
    document.querySelector("#wind").innerHTML =
      "Wind:" + Math.round(response.data.wind.speed) + " Km/h";
    document.querySelector("#description").innerHTML =
      response.data.weather[0].main;
      currentweatherItems=document.querySelector("current-weather-items");
      weattherForecastEl=document.querySelector("weather-forecast");
      currentTempEl= document.querySelector("current-temp");
//To make weather icon change by itself as per the city searched
iconElement.setAttribute(
  "src",
  `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
);


 
  }
  
  function searchCity(city) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showCurrentWeather);
  }
  
  function handleSearch(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
  }
  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(displayPosition);
  }
  // to enable search and current button working
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", handleSearch);
  
  let currentButton = document.querySelector("#currentcity");
  currentButton.addEventListener("click", getLocation);
  
  function displayPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let units = "metric";
  
    let apiEndPoint = `https://api.openweathermap.org/data/2.5/weather`;
    let apiKey = "e9161f5165c9dd60305601ec8b452226";
    let apiUrl = `${apiEndPoint}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
    console.log(apiUrl);
  
    axios.get(apiUrl).then(showCurrentWeather);
  }
  
  navigator.geolocation.getCurrentPosition(displayPosition);
  
  function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
      let dayIndex = date.getDay();


    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
 
    return 'Last Updated:'+' '+`${day} ${hours}:${minutes}`;

  }


  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

let month = months[monthIndex];

  function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    let fahrenheitTemperature = (celsiusTemperature*9)/5+32;
    document.querySelector("#temperature").innerHTML = Math.round(fahrenheitTemperature);
  }

  function convertToCelsius(event) {
    console.log(celsiusTemperature);
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    //let fahrenheitToCel = (fahrenheitTemperature - 32) * 5 / 9;
      document.querySelector("#temperature").innerHTML = Math.round(celsiusTemperature);
   
  }
  
let celsiusTemperature = null;
let temp_min= null;
let temp_max = null;

  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  fahrenheitLink.addEventListener("click", convertToFahrenheit);
  
  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.addEventListener("click", convertToCelsius);

  let iconElement = document.querySelector("#icon");
  
  //function search(event) {
    //event.preventDefault();
    //let cityElement = document.querySelector("#city");
    //let cityInput = document.querySelector("#city-input");
    //cityElement.innerHTML = cityInput.value;
  //}
    
  //let searchForm = document.querySelector("#search-form");
  //searchForm.addEventListener("submit", search);
    

