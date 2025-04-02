const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');
const dayAfter = document.querySelector('#day-after');

// OpenWeatherMap API key
const forecastKey = "10b4e4b9e27d7da497fdff1c462214d2";

// Latitude and Longitude for Gweru, Zimbabwe
const forecastLat = "-19.4167"; // Gweru Latitude
const forecastLong = "29.8321"; // Gweru Longitude

const forecastURL = `//api.openweathermap.org/data/2.5/forecast?lat=${forecastLat}&lon=${forecastLong}&appid=${forecastKey}&units=imperial`;

async function apiFetch() {
  try {
    const res = await fetch(forecastURL);
    if (res.ok) {
      const data = await res.json();
      displayForecast(data);
    } else {
        throw Error(await res.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayForecast(data) {
  today.innerHTML = `Today: ${data.list[0].main.temp.toFixed(0)}°F`;
  tomorrow.innerHTML = `Tomorrow: ${data.list[1].main.temp.toFixed(0)}°F`;
  dayAfter.innerHTML = `Day After: ${data.list[2].main.temp.toFixed(0)}°F`;
}

// Call the function to fetch the weather data
apiFetch();