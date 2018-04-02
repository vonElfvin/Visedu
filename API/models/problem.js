module.exports = (mongoose) => {

    const ProblemSchema = new mongoose.Schema({
        question: {
            type: String,
            required: true,
            trim: true,
        },
        answer: {
            type: Number,
            required: true,
            trim: true,
        },
        area: {
            type: String,
            required: true,
            trim: true,
            enum: ["skill_training", "problem_solving", "tricky_question"],
        }
    });

    return mongoose.model('Problem', ProblemSchema);
};
