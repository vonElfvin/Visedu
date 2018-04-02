module.exports = (mongoose) => {
    // setup model
    const Class = require('../models/class')(mongoose);

    // bind methods
    return {
        // get all classes
        list: (req, res) => {
            const query = req.query || {};

            Class.find(query)
            // .select('name _id')
                .then(classes => {
                    res.json(classes);
                }).catch(err => {
                res.send(422).send(err.errors);
            });
        },

        // get single class
        get: (req, res) => {
            const id = req.params.id;

            Class.findById(id).then(c => {
                res.json(c);
            }).catch(err => {
                res.status(500).send(err.errors);
            });
        },

        // post class
        post: (req, res) => {
            const data = req.body || {};

            Class.create(data).then(c => {
                res.json(c);
            }).catch(err => {
                res.status(500).send(err.errors);
            });
        },

        // delete class
        delete: (req, res) => {
            const query = {_id: req.params.id};

            Class.remove(query).then(c => {
                res.json(c);
            }).catch(err => {
                res.status(500).send(err.errors);
            })
        }
    }
};