module.exports = (app, mongoose) => {
    // setup controller
    const Student = require('../controllers/student')(mongoose);

    // bind routes
    app.route('/students').get(Student.list);
    app.route('/students/:id').get(Student.get);
    app.route('/students').post(Student.post);
    app.route('/students/:id').delete(Student.delete);
};