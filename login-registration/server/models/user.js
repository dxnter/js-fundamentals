const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter a name'],
        },
        email: {
            type: String,
            required: [true, 'Please enter an email'],
        },
        password: {
            type: String,
            required: [true, 'Please enter a name'],
        },
    },
    { timestamps: true }
);

UserSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    next();
});

UserSchema.methods.authenticate = function(password) {
    return bcrypt.compareSync(password, this.password);
};

mongoose.model('User', UserSchema);
