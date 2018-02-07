var express = require("express");
var path = require("path");
var session = require("express-session");
var data, guess;
var app = express();
var bodyParser = require("body-parser");
app.use(session({ secret: "secretkey" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    req.session.number = req.session.number || Math.floor(Math.random() * 100);
    data = 0;
    res.render("index", {data: data, guess: guess});
});

app.post("/guess", function(req, res) {
    let number = req.session.number;
    let guess = req.body.guess;
    if (guess == 0) {
        data = "empty"
    }
    else if (guess == number) {
        data = "correct"
    }
    else if (guess > number) {
        data = "high"
    }
    else if (guess < number) {
        data = "low"
    }
    console.log(`=======\nNumber: ${number}\nGuess: ${guess}\nData:${data}\n=======`);
    res.render("index", {data: data, guess: guess});
});

app.post("/reset", function(req, res) {
    data = 0;
    req.session.destroy();
    res.redirect('/')
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});
