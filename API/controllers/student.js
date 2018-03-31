module.exports = (mongoose) => {
    const Student = require('../models/student')(mongoose);
    return {
        list: (req, res) => {
            res.json({name: 'Elvin'});
        },
        post: (req, res) => {
            const data = req.body;
            console.log(data);
            Student.create(data).then(student => {
                res.json(student);
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }
};