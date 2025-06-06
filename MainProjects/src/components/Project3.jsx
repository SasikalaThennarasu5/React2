// src/components/Project3.jsx
import React, { useState, useEffect } from 'react';
import './Project3.css';

const API_KEY = 'YOUR_API_KEY'; // Replace with a real OpenWeatherMap API key

function Project3() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState('metric'); // 'metric' = Celsius, 'imperial' = Fahrenheit
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    if (!city) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(query);
  };

  const toggleUnit = () => {
    setUnit((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
  };

  const getCurrentLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${unit}`
      );
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    });
  };

  return (
    <div className="weather-container">
      <h2>Weather App</h2>
      <form onSubmit={handleSearch} className="weather-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>
      <button onClick={getCurrentLocation} className="location-btn">
        Use Current Location
      </button>
      <button onClick={toggleUnit} className="unit-btn">
        Toggle °C/°F
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : weather && weather.main ? (
        <div className="weather-info">
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p>Temperature: {weather.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Condition: {weather.weather[0].main}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Project3;
