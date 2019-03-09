/*
 * NPM Dependencies
 *
 * */
const express = require('express');

/*
 * Import Middlewares config
 *
 * */
const middlewaresConfig = require('./config/server');

/*
 * Import Middlewares config
 *
 * */
const apiRoutes = require('./app/routes');

/*
 * Express instance
 *
 * */
const app = express();

/*
 * Wrap all the middlewares with the server
 *
 * */
middlewaresConfig(app);

/*
 * Wrap all the API routes
 *
 * */
apiRoutes(app);

module.exports = app;
