const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var port = 8000;
var app = express();

/**
    POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
    POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.
 */

/** Penguin Schema */
var PenguinSchema = new Schema(
    {
        name: String,
        age: Number,
        sex: String,
        food: String,
    },
    { timestamps: true }
);
mongoose.model('Penguin', PenguinSchema);
var Penguin = mongoose.model('Penguin');

/** Configuration */
mongoose.connect('mongodb://localhost/penguin_dashboard');
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/** Routes */

// Index route that displays all penguins in the database
app.get('/', (req, res) => {
    Penguin.find({})
        .sort('-createdAt')
        .exec(function(err, penguins) {
            if (err) {
                console.log('Something went wrong');
            } else {
                res.render('index', { penguins });
            }
        });
});

// Form for creating a new penguin and saving it to the database
app.get('/penguin/new', (req, res) => {
    res.render('new');
});

// Showing specific penguin details
app.get('/penguin/:id', (req, res) => {
    Penguin.findById(req.params.id, function(err, penguin) {
        if (!err) {
            res.render('details', { penguin });
        } else {
            return console.log(err);
        }
    });
});

app.get('/penguin/edit/:id', (req, res) => {
    Penguin.findById(req.params.id, function(err, penguin) {
        if (!err) {
            res.render('edit', { penguin });
        } else {
            return console.log(err);
        }
    });
});

app.post('/penguin', (req, res) => {
    console.log(`POST DATA: ${req.body.name}, ${req.body.age}, ${req.body.sex}, ${req.body.food}`);
    var penguin = new Penguin({ name: req.body.name, age: req.body.age, sex: req.body.sex, food: req.body.food });
    penguin.save(function(err) {
        if (err) {
            console.log('Something went wrong');
        } else {
            console.log('Successfully created penguin');
            res.redirect('/');
        }
    });
});

// Start the server on the specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
