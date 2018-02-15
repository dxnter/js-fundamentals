const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model('User');

class UsersController {
    dashboard(req, res) {
        if (!req.session.user_id) {
            return res.redirect('/');
        }
        res.render('dashboard', { session: req.session });
    }
    homepage(req, res) {
        return res.render('index');
    }
    create(req, res) {
        User.create(req.body, (err, user) => {
            if (err) {
                return res.json(err);
            }
            req.session.user_id = user._id;
            req.session.name = user.name;
            return res.redirect('/dashboard');
        });
    }
    authenticate(req, res) {
        User.findOne({ email: req.body.email }, (err, user) => {
            if (err) {
                return res.redirect('/');
            }
            if (user && user.authenticate(req.body.password)) {
                req.session.user_id = user._id;
                req.session.name = user.name;
                return res.redirect('/dashboard');
            }
            return res.redirect('/');
        });
    }
    isLoggedIn(req, res) {
        if (req.session.user_id) {
            return res.json({
                status: true,
            });
        } else {
            return res.json({
                status: false,
            });
        }
    }
    logout(req, res) {
        req.session.destroy(function(err) {
            if (err) {
                return res.json(err);
            } else {
                return res.redirect('/');
            }
        });
    }
}

module.exports = new UsersController();
