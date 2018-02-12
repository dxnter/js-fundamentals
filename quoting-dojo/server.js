const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let port = 8000;
var app = express();

/** Configuration */
mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
let server = app.listen(port, () => console.log(`Listening on port ${port}`));

/** Quote Schema */
var QuoteSchema = new mongoose.Schema(
    {
        name: { type: String },
        quote: { type: String },
    },
    { timestamps: true }
);
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

/** Routes */
app.get('/', (req, res) => {
    res.render('index');
});

// Saving the submitted quote data to the DB and redirecting them to the quotes view
app.post('/quotes', (req, res) => {
    console.log(`POST DATA: ${req.body.name}, ${req.body.quote}`);
    var quote = new Quote({ name: req.body.name, quote: req.body.quote });
    quote.save(function(err) {
        if (err) {
            console.log('Something went wrong');
        } else {
            console.log('Successfully added a user!');
            res.redirect('/quotes');
        }
    });
});

// Fetching all quotes in the DB and sending them to the views in decending order
app.get('/quotes', (req, res) => {
    Quote.find({})
        .sort('-createdAt')
        .exec(function(err, quotes) {
            if (err) {
                console.log('Something went wrong');
            } else {
                res.render('quotes', { quotes });
            }
        });
});
