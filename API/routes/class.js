module.exports = (app, mongoose) => {
    // setup controller
    const Class = require('../controllers/class')(mongoose);

    // bind routes
    app.route('/classes').get(Class.list);
    app.route('/classes/:id').get(Class.get);
    app.route('/classes').post(Class.post);
    app.route('/classes/:id').delete(Class.delete);
};