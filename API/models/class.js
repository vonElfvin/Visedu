module.exports = (mongoose) => {

    const ClassSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
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

// _id: string;
// name: string;
// code: string;
// school: string;
// teacherId: string;