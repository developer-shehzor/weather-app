const getWeatherData = (city) => {
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3f20bbd36amsh284bd6c633452f9p120c64jsn7d05013ab724',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
	.then(response => response.json())
	.then(response => response)
	.catch(err => console.error(err));
}

const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  const data = await getWeatherData(city)
  showWeatherData(data)
}

const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  console.log(weatherData, 'Hyderabad')
  document.getElementById('temp').innerText = weatherData.main.temp
  document.getElementById('city-name').innerText = weatherData.name
  document.getElementById('weather-type').innerText = weatherData.weather[0].main
  document.getElementById('min-temp').innerText = weatherData.main.temp_min
  document.getElementById('max-temp').innerText = weatherData.main.temp_max
}

