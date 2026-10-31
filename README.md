# Simple Weather API

A lightweight weather API built with Node.js and Express. It uses the OpenWeather API to retrieve weather information and provides an HTTP interface for accessing weather data.

## Features

- Node.js and Express-based API server.
- Integration with OpenWeather API.
- Configurable server port.
- Environment-based configuration for API credentials and external API URLs.
- Geolocation and weather forecast API URL configuration.

## Prerequisites

- [Node.js](https://nodejs.org/) and npm.
- An OpenWeather API key.
- Git.

## Installation

Clone the repository:

```bash
git clone https://github.com/ramilmoral/simple-weather-api.git
cd simple-weather-api
```

Install dependencies:

```bash
npm install
```

## Configuration

The repository includes an `env.sample` file containing the following configuration variables:

| Variable                  | Sample value                    | Description              |
| ------------------------- | ------------------------------- | ------------------------ |
| `PORT`                    | `4000`                          | Intended server port     |
| `OPENWEATHER_API_KEY`     | `key`                           | OpenWeather API key      |
| `OPENWEATHER_API_URL`     | OpenWeather current weather URL | Current weather API URL  |
| `DIRECT_LOCATION_API_URL` | OpenWeather geocoding URL       | Direct geocoding API URL |
| `DAILY_FORECAST_API_URL`  | OpenWeather forecast URL        | Forecast API URL         |

Create a `.env` file in the project root and copy the configuration from `env.sample`.

Replace the sample API key with your actual OpenWeather API key.

```env
PORT=4000
OPENWEATHER_API_KEY=your_api_key
OPENWEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
DIRECT_LOCATION_API_URL=https://api.openweathermap.org/geo/1.0/direct
DAILY_FORECAST_API_URL=https://api.openweathermap.org/data/2.5/forecast
```

The environment variable names and sample values are taken from the repository's configuration template. Their usage in application code could not be verified.

## Running Locally

The `package.json` defines the following start command:

```bash
npm start
```

The startup script references:

```bash
node ./bin/www
```

The server startup configuration uses `PORT` when available and defaults to port `3000`.

## API Endpoints

The repository currently contains two route modules:

| Route module                  | Handler                           | Description                                                                                   |
| ----------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------- |
| `api/routes/weather.route.js` | `GET /api/weather/city`           | Renders the `city` name, local names, country and the latitude longitude.                     |
| `api/routes/weather.route.js` | `GET /api/weather/daily-forecast` | Renders the day forecast upto 16 day with daily average parameters by geographic coordinates. |
| `api/routes/weather.route.js` | `GET /api/weather/lat-lon`        | Returns the latitude and longitude based on the geographic coordinates.                       |

## Project Structure

```
└── 📁simple-weather-api
    └── 📁api
        └── 📁controllers
            ├── weather.controller.js
        └── 📁enums
            ├── weather.enums.js
        └── 📁routes
            ├── index.js
            ├── weather.route.js
    └── 📁bin
        ├── www
    └── 📁public
        └── 📁images
        └── 📁javascripts
        └── 📁stylesheets
            ├── style.css
    └── 📁routes
        ├── index.js
        ├── users.js
    └── 📁views
        ├── error.jade
        ├── index.jade
        ├── layout.jade
    ├── .gitignore
    ├── app.js
    ├── env.sample
    ├── package-lock.json
    ├── package.json
    └── README.md
```

## Technologies Used

The dependencies declared in `package.json` include:

- **Node.js** – JavaScript runtime.
- **Express 4** – Web application framework.
- **dotenv** – Environment variable configuration.
- **Jade** – Template rendering.
- **Morgan** – HTTP request logging.
- **cookie-parser** – Cookie parsing middleware.
- **http-errors** – HTTP error creation.
- **debug** – Debugging utilities.

## Testing

No test scripts or testing framework are declared in `package.json`.

Automated testing instructions are therefore not currently available.

## Error Handling and Limitations

The server startup script includes handling for common listening errors:

- `EACCES`: Reports when elevated privileges are required.
- `EADDRINUSE`: Reports when the configured port is already in use.
- Other errors are thrown.

Additional project limitations:

- No automated tests are configured.
- No deployment configuration is provided.
