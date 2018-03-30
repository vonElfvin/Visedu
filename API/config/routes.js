module.exports = (app) => {
    // get
    app.get('/', (req, res) => {
        res.status(200).send('Node app API called.');
    });
};