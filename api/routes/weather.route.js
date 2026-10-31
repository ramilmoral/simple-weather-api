const express = require('express');
const router = express.Router();
const {
  weather,
  city,
  dailyForecastByCity,
  latLon,
} = require('../controllers/weather.controller');

/**
 * Routes
 */
router.get('/', weather);
router.get('/city', city);
router.get('/daily-forecast', dailyForecastByCity);
router.get('/lat-lon', latLon);

module.exports = router;
