'use strict';

const express = require("express");

// constants
const PORT = 8080;
const HOST = '0.0.0.0';

// app
const app = express();

// get
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Server listening on: http://${HOST}:${PORT}`);
