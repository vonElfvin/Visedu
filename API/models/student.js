module.exports = (mongoose) => {

    const StudentSchema = new mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        classCode: {
            type: String,
            required: true,
            trim: true,
        },
        total_problems: {
            skill_training: {
                type: Number,
                default: 0,
            },
            problem_solving: {
                type: Number,
                default: 0,
            },
            tricky_question: {
                type: Number,
                default: 0,
            },
        }
    });

    return mongoose.model('Student', StudentSchema);
};