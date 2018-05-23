'use strict';

module.exports = (mongoose) => {
    // setup model
    const Class = require('../models/class')(mongoose);

    // bind methods
    return {
        // get all classes
        list: (req, res) => {
            const query = req.query || {};

            Class.find(query)
                .sort('name')
            // .select('name _id')
                .then(classes => {
                    res.json(classes);
                }).catch(err => {
                res.send(422).send(err.errors);
            });
        },

        // get single class
        get: (req, res) => {
            const code = req.params.code;

            // path: classes/:code
            if (code) {
                Class.findOne({'code': code}).then(c => {
                    res.json(c);
                }).catch(err => {
                    res.status(500).send(err.errors);
                });
            // path: classes/:teacherId/:name
            } else {
                const teacherId = req.params.teacherId;
                const name = req.params.name;

                Class.findOne({'teacherId': teacherId, 'name': name}).then(c => {
                    res.json(c);
                }).catch(err => {
                    res.status(500).send(err.errors);
                });
            }

        },

        // post class
        post: (req, res) => {
            let data = req.body || {};

            Class.create(data).then(c => {
                res.json(c);
            }).catch(err => {
                res.status(500).send(err.errors);
            });
        },

        update: (req, res) => {
            let data = req.body || {};

            let id = req.params.id;

            Class.findByIdAndUpdate(id, data).then(c  => {
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