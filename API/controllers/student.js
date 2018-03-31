module.exports = (mongoose) => {
    // setup model
    const Student = require('../models/student')(mongoose);

    // bind methods
    return {
        list: (req, res) => {
            const query = req.query || {};

            Student.find(query)
                // .select('name _id')
                .then(students => {
                    res.json(students);
                }).catch(err => {
                    res.send(422).send(err.errors);
            })
        },
        post: (req, res) => {
            const data = req.body || {};

            Student.create(data).then(student => {
                res.json(student);
            }).catch(err => {
                res.status(500).send(err.errors);
            });
        }
    }
};