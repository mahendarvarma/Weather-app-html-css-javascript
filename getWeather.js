function getWeather() {
    const apiKey = 50, c92b8379c5f3efb602d34e74a13895;
    Default; // Replace with your OpenWeatherMap API key
    const cityInput = document.getElementById('cityInput').value;

    if (!cityInput) {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            alert(error.message);
        });
}
