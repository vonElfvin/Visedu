module.exports = (mongoose) => {
    // setup model
    const Teacher = require('../models/teacher')(mongoose);

    // bind methods
    return {
        // get all teachers
        list: (req, res) => {
            const query = req.query || {};

            Teacher.find(query)
            // .select('name _id')
                .then(teachers => {
                    res.json(teachers);
                }).catch(err => {
                res.send(422).send(err.errors);
            });
        },

        // get single teacher
        get: (req, res) => {
            const id = req.params.id;

            Teacher.findById(id).then(teacher => {
                res.json(teacher);
            }).catch(err => {
                res.status(500).send(err.errors);
            });
        },

        // post teacher
        post: (req, res) => {
            const data = req.body || {};

            Teacher.create(data).then(teacher => {
                res.json(teacher);
            }).catch(err => {
                res.status(500).send(err.errors);
            });
        },

        // delete teacher
        delete: (req, res) => {
            const query = {_id: req.params.id};

            Teacher.remove(query).then(teacher => {
                res.json(teacher);
            }).catch(err => {
                res.status(500).send(err.errors);
            })
        }
    }
};