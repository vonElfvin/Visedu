module.exports = (mongoose) => {

    const ClassSchema = new mongoose.Schema({
        name: {
            type: String,
            default: '',
        }
    });

    return mongoose.model('Class', ClassSchema);
};