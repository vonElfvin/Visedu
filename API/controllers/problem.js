module.exports = (mongoose) => {
    // setup model
    const Problem = require('../models/problem')(mongoose);

    // bind methods
    return {
        // get all problems
        list: (req, res) => {
            const query = req.query || {};

            Problem.find(query)
            // .select('name _id')
                .then(problems => {
                    res.json(problems);
                }).catch(err => {
                res.send(422).send(err.errors);
            });
        },

        // get single problem
        get: (req, res) => {
            const id = req.params.id;

            Problem.findById(id).then(problem => {
                res.json(problem);
            }).catch(err => {
                res.status(500).send(err.errors);
            });
        },

        // post problem
        post: (req, res) => {
            const data = req.body || {};

            Problem.create(data).then(problem => {
                res.json(problem);
            }).catch(err => {
                res.status(500).send(err.errors);
            });
        },

        // delete problem
        delete: (req, res) => {
            const query = {_id: req.params.id};

            Problem.remove(query).then(problem => {
                res.json(problem);
            }).catch(err => {
                res.status(500).send(err.errors);
            })
        }
    }
};