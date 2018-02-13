const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 8000;
const app = express();

/** Mongoose */
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/1995');
mongoose.Promise = global.Promise;

const PersonSchema = new Schema(
    {
        name: String,
    },
    { timestamps: true }
);
mongoose.model('Person', PersonSchema);
const Person = mongoose.model('Person');
/** Configuration */
app.use(bodyParser.json());

/** Routes */

// Render the index page and return all the people objects in JSON
app.get('/', (req, res) => {
    Person.find({}, function(err, people) {
        if (err) {
            console.log('Returned error', err);
            res.json({ message: 'Error', error: err });
        } else {
            res.json({ people });
        }
    });
});

// Return one person that is passed into the URL paramater
app.get('/:name', (req, res) => {
    Person.findOne({ name: req.params.name }, function(err, person) {
        if (err) {
            console.log('Returned error', err);
            res.json({ message: 'Error', error: err });
        } else {
            res.json({ person });
        }
    });
});

// Create a new user and redirect to the index
app.get('/new/:name', (req, res) => {
    var person = new Person({ name: req.params.name });
    person.save(function(err) {
        if (err) {
            res.json({ message: 'Error' });
        } else {
            console.log('New person created');
            res.redirect('/');
        }
    });
});

// Remove the specified person passed into the URL paramater
app.get('/remove/:name', (req, res) => {
    Person.findOneAndRemove({ name: req.params.name }, function(err) {
        if (err) {
            res.json({ message: 'Error' });
        } else {
            res.redirect('/');
        }
    });
});
/** Initialize the server */
app.listen(port, () => console.log(`Listening on port ${port}`));
