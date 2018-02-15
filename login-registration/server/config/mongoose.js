const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect('mongodb://localhost/login_registration22');
mongoose.Promise = global.Promise;

let modelsPath = __dirname + '/../models';

fs.readdirSync(modelsPath).forEach(file => {
    if (file.includes('.js')) {
        console.log(`Loading ${file}...`);
        require(`${modelsPath}/${file}`);
    }
});
