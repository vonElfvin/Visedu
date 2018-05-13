module.exports = (app, mongoose) => {
    // setup controller
    const User = require('../controllers/user')(mongoose);

    // bind routes
    app.route('/users').get(User.list);
    app.route('/users/:id').get(User.get);
    app.route('/users').post(User.post);
    app.route('/users/:uid').delete(User.delete);
};