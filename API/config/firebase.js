'use strict';

const admin = require("firebase-admin");

const serviceAccount = require("./visedu-firebase-only-project-firebase-admin-sdk.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://visedu-app.firebaseio.com"
});

module.exports = admin;