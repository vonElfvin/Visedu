module.exports = (mongoose) => {

    const TeacherSchema = new mongoose.Schema({
        name: {
            type: String,
            default: '',
        }
    });

    return mongoose.model('Teacher', TeacherSchema);
};