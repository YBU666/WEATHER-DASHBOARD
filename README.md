# Weather Dashboard

A modern, responsive weather dashboard built with React that provides current weather conditions and a 5-day forecast for any city worldwide.

![Weather Dashboard Screenshot](screenshot.png)

## Features

- 🔍 Real-time weather search by city name
- 🌡️ Current weather conditions including:
  - Temperature
  - Humidity
  - Weather description
  - Weather icon
- 📅 5-day weather forecast
- 🎠 Interactive forecast carousel
- ⚡ Loading states and error handling
- 📱 Responsive design
- 🔒 Input validation for city names

## Technologies Used

- React.js
- Axios for API requests
- OpenWeatherMap API
- CSS3 for styling
- Environment variables for secure API key storage

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/weather-dashboard.git
```

2. Navigate to the project directory:

```bash
cd weather-dashboard
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

5. Start the development server:

```bash
npm start
```


## Environment Variables

The application requires the following environment variable:

- `REACT_APP_WEATHER_API_KEY`: Your OpenWeatherMap API key

## API Reference

This project uses the OpenWeatherMap API:
- Current Weather Data: `/weather`
- 5 Day Forecast: `/forecast`

Get your API key by signing up at [OpenWeatherMap](https://openweathermap.org/api)

## Project Structure

```
weather-dashboard/
├── src/
│   ├── components/
│   │   ├── WeatherDashboard.jsx
│   │   ├── WeatherDashboard.css
│   │   └── LoadingSpinner.jsx
│   ├── App.js
│   └── index.js
├── public/
├── .env
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from OpenWeatherMap's weather icon set






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
