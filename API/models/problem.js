module.exports = (mongoose) => {

    const ProblemSchema = new mongoose.Schema({
        name: {
            type: String,
            default: '',
        }
    });

    return mongoose.model('Problem', ProblemSchema);
};