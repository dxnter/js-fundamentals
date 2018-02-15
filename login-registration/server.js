const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');

app.use(express.static(__dirname + '/client/static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        secret: 'loginregistration',
        resave: false,
        saveUninitialized: true,
    })
);

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`Running on port ${port}...`));
