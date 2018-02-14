const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 8000;
const app = express();
app.use(bodyParser.json());

/** Mongoose */
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/restful_tasks');
mongoose.Promise = global.Promise;

const TaskSchema = new Schema(
    {
        title: { type: String },
        description: { type: String, default: '' },
        completed: { type: Boolean, default: false },
    },
    { timestamps: true }
);
mongoose.model('Task', TaskSchema);
const Task = mongoose.model('Task');
/** Routes */

// Render the index page will all tasks
app.get('/', (req, res) => {
    Task.find({}, function(err, tasks) {
        if (err) {
            console.log('Returned error', err);
            res.json({ message: 'Error', error: err });
        } else {
            res.json({ tasks });
        }
    });
});

// Show a specific task by id
app.get('/:id', (req, res) => {
    Task.findOne({ _id: req.params.id }, function(err, task) {
        if (err) {
            console.log('Returned error', err);
            res.json({ message: 'Error', error: err });
        } else {
            res.json({ task });
        }
    });
});

// Create a new task and redirect to the index page
app.get('/new/:title/:description', (req, res) => {
    console.log(req.params);
    var task = new Task({ title: req.params.title, description: req.params.description });
    task.save(function(err) {
        if (err) {
            res.json({ message: 'Error' });
        } else {
            console.log('New task created');
            res.redirect('/');
        }
    });
});

// Update a task with paramaters set in the URL
app.get('/update/:id/:title/:description/:completed', (req, res) => {
    Task.findOne({ _id: req.params.id }, function(err, task) {
        if (err) {
            console.log('Returned error', err);
            res.json({ message: 'Error', error: err });
        } else {
            task.title = req.params.title;
            task.description = req.params.description;
            task.completed = req.params.completed;
            task.save(function(err) {
                if (err) {
                    res.json({ message: 'Error' });
                } else {
                    console.log('Task updated');
                    res.redirect('/');
                }
            });
        }
    });
});
// Remove a task by ID
app.get('/remove/:id', (req, res) => {
    Task.findOneAndRemove({ _id: req.params.id }, function(err) {
        if (err) {
            res.json({ message: 'Error' });
        } else {
            res.redirect('/');
        }
    });
});
/** Server Startup */
app.listen(port, () => console.log(`Listening on port ${port}`));
