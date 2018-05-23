'use strict';

const firebase = require("../config/firebase");
const mongoose = require("mongoose");

module.exports = () => {
    return {

        // checks if the user is an admin
        isAdmin: (req, res, next) => {

            const token = req.header('authorization').split('Bearer ')[1];

            // verify token
            firebase.auth().verifyIdToken(token).then((decodedToken) => {

                // check if user is admin
                mongoose.model("User").findOne({'uid': decodedToken.uid}).then(user => {

                    // if admin
                    if (user.role === 'admin') {
                        next();

                    // not admin
                    } else {
                        res.sendStatus(401);
                    }
                });
            }).catch(err => {
                res.sendStatus(401).send(err.errors);
            });
        },

        // checks if the user is authorized
        isAuthorized: (req, res, next) => {

            // attempts to extract authorization header
            const authorization = req.header('authorization');

            // if authorization header present
            if (authorization) {

                // extract token
                const token = authorization.split('Bearer ')[1];

                // verify token
                firebase.auth().verifyIdToken(token).then(() => {
                    next();
                }).catch(err => {
                    res.sendStatus(401).send(err.errors);
                });

            // no authorization header
            } else {
                res.sendStatus(401);
            }
        }
    }
};