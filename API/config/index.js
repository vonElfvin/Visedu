'use strict';

// constants
const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8080;
const URI = ''
    + 'mongodb://elvingranat:X0JbslmchRD48kJe@visedu-app-cluster-shard-'
    + '00-00-24cuw.mongodb.net:27017,visedu-app-cluster-shard-'
    + '00-01-24cuw.mongodb.net:27017,visedu-app-cluster-shard-'
    + '00-02-24cuw.mongodb.net:27017/test?ssl=true&replicaSet='
    + 'visedu-app-cluster-shard-0&authSource=admin';
// const URI = 'mongodb+srv://elvingranat:X0JbslmchRD48kJe@visedu-app-cluster-24cuw.mongodb.net/test';

// config
const config = {
    // development
    development: {
        port: PORT,
        db: URI,
        env: ENV,
    },

    // production
    production: {
        port: PORT,
        db: URI,
        env: ENV,
    }
};

module.exports = config[ENV];