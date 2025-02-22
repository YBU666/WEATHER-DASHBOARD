async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Weather data not found');
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error; // Re-throw to handle in component
  }
} 