module.exports = (mongoose) => {

    const StudentSchema = new mongoose.Schema({
        name: {
            type: String,
            default: '',
        }
    });

    return mongoose.model('Student', StudentSchema);
};