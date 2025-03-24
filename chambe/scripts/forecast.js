const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');
const dayAfter = document.querySelector('#day-after');

const forecastKey = "10b4e4b9e27d7da497fdff1c462214d2"
const forecastLat = "43.626636"
const forecastLong = "-116.413472"

const forecastURL = `//api.openweathermap.org/data/2.5/forecast?lat=${forecastLat}&lon=${forecastLong}&appid=${forecastKey}&units=imperial`

async function apiFetch() {
  try {
    const res = await fetch(forecastURL);
    if (res.ok) {
      const data = await res.json();
      // console.log(data); // testing only
      displayForecast(data); // uncomment when ready
    } else {
        throw Error(await res.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayForecast(data) {
  // console.log('hello')
  today.innerHTML = `Today: ${data.list[0].main.temp.toFixed(0)}°F`
  tomorrow.innerHTML = `Tomorrow: ${data.list[1].main.temp.toFixed(0)}°F`
  dayAfter.innerHTML = `Day After: ${data.list[2].main.temp.toFixed(0)}°F`
}

apiFetch();