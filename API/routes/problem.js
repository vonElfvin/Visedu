module.exports = (app, mongoose) => {
    // setup controller
    const Problem = require('../controllers/problem')(mongoose);

    // bind routes
    app.route('/problems').get(Problem.list);
    app.route('/problems/:id').get(Problem.get);
    app.route('/problems').post(Problem.post);
    app.route('/problems/:id').delete(Problem.delete);
};