import React, { useState, useEffect } from 'react';
import '../styles/RealTimeAlerts.css';

function RealTimeAlerts() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Example: Replace with your weather API integration
    fetch('https://api.openweathermap.org/data/2.5/weather?q=city&appid=YOUR_API_KEY')
      .then(response => response.json())
      .then(data => setWeather(data));
  }, []);

  return (
    <div className="real-time-alerts">
      <h1>Real-Time Disease Alerts</h1>
      {weather ? (
        <div>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default RealTimeAlerts;
