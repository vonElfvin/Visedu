module.exports = (app, mongoose) => {
    // setup controller
    const Teacher = require('../controllers/teacher')(mongoose);

    // bind routes
    app.route('/teachers').get(Teacher.list);
    app.route('/teachers/:id').get(Teacher.get);
    app.route('/teachers').post(Teacher.post);
    app.route('/teachers/:id').delete(Teacher.delete);
};