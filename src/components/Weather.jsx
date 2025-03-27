import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  // State to store weather data
  const [weatherData, setWeatherData] = useState(null);
  // State to store any error that occurs during fetching
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // API call to fetch weather data for Surat, India
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=Surat,IN&appid=d41471778f8512e1f878d62edba127dd&units=metric"
        );
        // Set the fetched weather data to state
        setWeatherData(response.data);
      } catch (err) {
        // If there's an error, store the error message in state
        setError(err.message);
      }
    };

    // Call the fetch function when the component mounts
    fetchWeather();
  }, []); // Empty dependency array ensures this effect runs only once

  // If an error occurs, display an error message
  if (error) {
    return <p>Error fetching weather: {error}</p>;
  }

  return (
    <div>
      {/* Heading for the weather section */}
      <h2>Weather in Surat</h2>
      {/* Display weather information if available, otherwise show loading message */}
      {weatherData ? (
        <p id="temp">Temperature: {weatherData.main?.temp}°C</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
