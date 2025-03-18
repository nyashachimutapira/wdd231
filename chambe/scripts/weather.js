document.addEventListener("DOMContentLoaded", () => {
    // Fetch weather data
    const weatherApiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Harare&appid=${weatherApiKey}&units=metric`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            const temperature = Math.round(data.main.temp);
            const weatherDesc = data.weather.map(item => item.description.charAt(0).toUpperCase() + item.description.slice(1)).join(', ');

            weatherInfo.innerHTML = `
                <p>Temperature: ${temperature}°C</p>
                <p>Conditions: ${weatherDesc}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});