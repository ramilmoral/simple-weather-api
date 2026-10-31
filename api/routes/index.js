const express = require('express');
const weatherRoute = require('./weather.route');

const router = express.Router();

router.use('/weather', weatherRoute);

module.exports = router;
