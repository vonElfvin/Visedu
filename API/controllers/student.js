module.exports = (mongoose) => {
    // setup model
    const Student = require('../models/student')(mongoose);

    // bind methods
    return {
        // get all students
        list: (req, res) => {
            const query = req.query || {};

            Student.find(query)
                .populate("user")
                // .select('name _id')
                .then(students => {
                    res.json(students);
                }).catch(err => {
                    res.send(422).send(err.errors);
            });
        },

        // get single student
        get: (req, res) => {
            const id = req.params.id;

            Student.findById(id)
                .populate("user")
                .then(student => {
                res.json(student);
            }).catch(err => {
                res.status(500).send(err.errors);
            });
        },

        update: (req, res) => {

            let id = req.params.id;
            let area = req.params.area;

            Student.findByIdAndUpdate(id, { $inc: { [`total_problems.${area}`]: 1 } } ).then(student  => {
                res.json(student);
            }).catch(err => {
                res.status(500).send(err.errors);
            });
        },

        // post student
        post: (req, res) => {
            const data = req.body || {};

            Student.create(data).then(student => {
                res.json(student);
            }).catch(err => {
                res.status(500).send(err.errors);
            });
        },

        // delete student
        delete: (req, res) => {
            const query = {_id: req.params.id};

            Student.remove(query).then(student => {
                res.json(student);
            }).catch(err => {
                res.status(500).send(err.errors);
            })
        }
    }
};