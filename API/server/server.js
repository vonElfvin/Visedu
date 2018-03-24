const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ViseduApp');

const User = mongoose.model('User', {
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    lastLogin: {
        type: Number
    }
});

const newUser = new User(
    {
        firstName: 'Louise',
        lastName: 'Abrahamsson',
        email: 'loab95@gmail.com',
        phone: '0700623388',
        lastLogin: +new Date()
    }
);

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('Unable to create user', err);
});