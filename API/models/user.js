module.exports = (mongoose) => {

    const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            default: '',
        }
    });

    return mongoose.model('User', UserSchema);
};