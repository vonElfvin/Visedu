module.exports = (mongoose) => {
    // setup model
    const User = require('../models/user')(mongoose);

    // bind methods
    return {
        // get all users
        list: (req, res) => {
            const query = req.query || {};

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
            }).catch(err => {
                res.status(500).send(err.errors);
            });
        },

        // post user
        post: (req, res) => {
            const data = req.body || {};

            User.create(data).then(user => {
                res.json(user);
            }).catch(err => {
                res.status(500).send(err.errors);
            });
        },

        // delete user
        delete: (req, res) => {
            const query = {_id: req.params.id};

            User.remove(query).then(user => {
                res.json(user);
            }).catch(err => {
                res.status(500).send(err.errors);
            })
        }
    }
};