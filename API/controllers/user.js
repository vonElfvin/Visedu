const firebase = require("../config/firebase");

module.exports = (mongoose) => {
    // setup model
    const User = require('../models/user')(mongoose);

    // bind methods
    return {
        // get all users
        list: (req, res) => {
            const query = req.query || {};

            const token = req.header('Authorization');
            console.log(token);

            User.find(query)
            // .select('name _id')
                .then(users => {
                    res.json(users);
                }).catch(err => {
                res.send(422).send(err.errors);
            });
        },

        // get single user
        get: (req, res) => {
            const id = req.params.id;

            User.findById(id).then(user => {
                res.json(user);
            }).catch(() => {
                User.findOne({'uid': id}).then(user => {
                    res.json(user);
                }).catch(err => {
                    res.status(500).send(err.errors);
                });
            });
        },

        // post user
        post: (req, res) => {
            let data = req.body || {};

            // create firebase user
            firebase.auth().createUser({
                email: data.email,
                password: data.password,
            }).then((credentials) => {

                // assign firebase uid to data
                const uid = credentials.uid;
                Object.assign(
                    data,
                    { uid: uid }
                );

                // add user to database
                User.create(data).then(user => {
                    res.json(user);

                // if error, delete user from firebase
                }).catch(err => {
                    firebase.auth().deleteUser(uid);
                    res.status(500).send(err.errors);
                });
            }).catch((err) => {
                res.status(500).send(err.errors);
            });
        },

        // delete user
        delete: (req, res) => {
            const uid = req.params.uid;

            const query = {uid: uid};

            console.log(uid);

            firebase.auth().deleteUser(uid).then(() => {
                User.remove(query).then(user => {
                    res.json(user);
                }).catch(err => {
                    res.status(500).send(err.errors);
                })
            }).catch(err => {
                res.status(500).send(err.errors);
            })
        }
    }
};