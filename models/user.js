const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

UserSchema.plugin(passportLocalMongoose); //este plugin mete usuario y contraseña como campos, y le mete cosas como unique, require, etc

module.exports = mongoose.model('User', UserSchema);
