module.exports = (mongoose) => {

    const UserSchema = new mongoose.Schema({
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
            type: boolean,
            default: false,
        },
        classCode: {
            type: String,
            required: true,
            trim: true,
        },
        role: {
            type: String,
            required: true,
            enum: ['student', 'teacher', 'admin'],
        }
    });

    return mongoose.model('User', UserSchema);
};

// _id: string;
// firstName: string;
// lastName: string;
// lastLogin: number;
// email: string;
// classCode: string;
// role: Role;