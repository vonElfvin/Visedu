'use strict';

const shortId = require('shortid');

module.exports = (mongoose) => {

    const ClassSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            default: shortId.generate,
        },
        school: {
            type: String,
            required: true,
        },
        teacherId: {
            type: mongoose.Schema.ObjectId,
            ref: 'Teacher',
            required: true,
        },
    });

    return mongoose.model('Class', ClassSchema);
};