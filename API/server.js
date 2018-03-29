'use strict';

const express = require("express");

// constants
const PORT = process.env.PORT || 8080;

// app
const app = express();

// get
app.get('/', (req, res) => {
    res.status(200).send('Node app API called.\n');
});

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
