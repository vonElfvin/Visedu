module.exports = (mongoose) => {
    const Schema = mongoose.Schema;

    const StudentSchema = new Schema({
        name: {
            type: String,
            default: '',
        }
    });

    return mongoose.model('Student', StudentSchema);
};