const fs = require('fs');
const routesPath = __dirname + '/../routes';

module.exports = (app, mongoose) => {
    // setup routes
    fs.readdirSync(routesPath).map(file => {
        require(routesPath + '/' + file)(app, mongoose);
    });

    // 404
    app.get('*', (req, res) => {
        res.status(404).json({ error:'Invalid GET request' })
    });
    app.post('*', (req, res) => {
        res.status(404).json({ error:'Invalid POST request' })
    });
    app.delete('*', (req, res) => {
        res.status(404).json({ error:'Invalid DELETE request' })
    });
};