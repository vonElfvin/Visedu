module.exports = (app, mongoose) => {
    const Student = require('../controllers/student')(mongoose);
    app.route('/students').get(Student.list);
    app.route('/students').post(Student.post);
};