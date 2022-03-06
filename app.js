const API_KEY = `7bd5fbe4ec12f52248c79c32e6bdf367`;
const searchTemperatur = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
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
  console.log(temperature);
};
