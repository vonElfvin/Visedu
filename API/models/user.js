module.exports = (mongoose) => {

    const UserSchema = new mongoose.Schema({
        uid: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        emailVerified: {
            type: Boolean,
            default: false,
        },
        role: {
            type: String,
            required: true,
            enum: ['student', 'teacher', 'admin'],
        }
    });

    return mongoose.model('User', UserSchema);
};