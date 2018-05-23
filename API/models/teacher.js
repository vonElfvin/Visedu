'use strict';

module.exports = (mongoose) => {

    const TeacherSchema = new mongoose.Schema({
        phone: {
            type: String,
            required: true,
        }
    });

    return mongoose.model('Teacher', TeacherSchema);
};