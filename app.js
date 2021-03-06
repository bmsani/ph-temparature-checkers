const API_KEY = `7bd5fbe4ec12f52248c79c32e6bdf367`;
const searchTemperatur = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = (temperature) => {
    setInnerText('city-title', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);

    const url =`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("weather-icon");
    imgIcon.setAttribute('src', url)
  console.log(temperature);
};
