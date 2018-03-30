// constants
const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8080;
const URI = 'mongodb+srv://elvingranat:X0JbslmchRD48kJe@visedu-app-cluster-24cuw.mongodb.net/test';

// config
const config = {
    // development
    development: {
        port: PORT,
        db: URI,
    },

    // production
    production: {
        port: PORT,
        db: URI,
    }
};

module.exports = config[env];