// Replace with your OpenWeatherMap API key
const apiKey = 'your-api-key-here'; 
const location = 'Gweru'; // Example location for weather data

async function getWeather() {
    try {
        // API call to OpenWeatherMap
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        if (response.ok) {
            // Parsing JSON data
            const data = await response.json();
            // Displaying weather information
            document.getElementById('weather').innerHTML = `
                <h3>Weather in ${data.name}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
            `;
        } else {
            // Handling API errors
            document.getElementById('weather').textContent = 'Unable to fetch weather data.';
        }
    } catch (error) {
        // Handling fetch or network errors
        document.getElementById('weather').textContent = 'Error fetching weather data.';
    }
}

// Initializing the weather function
getWeather();

// Displaying current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
