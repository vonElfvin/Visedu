module.exports = (app, mongoose) => {
    // setup controller
    const Student = require('../controllers/student')(mongoose);

    // bind routes
    app.route('/students').get(Student.list);
    app.route('/students').post(Student.post);
};