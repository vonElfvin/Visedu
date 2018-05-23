'use strict';

module.exports = (app, mongoose) => {
    // setup controller
    const User = require('../controllers/user')(mongoose);

    // setup utility
    const Auth = require('../utilities/auth')();

    // bind routes
    app.route('/users').get(Auth.isAdmin, User.list);
    app.route('/users/:id').get(Auth.isAuthorized, User.get);
    app.route('/users').post(User.post);
    app.route('/users/:uid').delete(User.delete);
};