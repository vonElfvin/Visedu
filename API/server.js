'use strict';

// imports
const mongoose = require('mongoose');
const express = require('express');
const config = require('./config');

// connect mongoose
mongoose.connect(config.db);
const connection = mongoose.connection;

// if connection error
connection.on('error', () => {
   console.log('Mongoose connection ERROR');
});

// if connection open
connection.on('open', () => {
    console.log('Mongoose connection OPEN');

    // initialize app
    const app = express();
    require('./config/express')(app);
    require('./config/routes')(app);

    app.listen(config.port, () => {
        console.log(`App listening on port: ${config.port}`);
        console.log('Press Ctrl+C to quit.');
    });
});
