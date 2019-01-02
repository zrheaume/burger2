const PORT = process.env.PORT || 8080;

const express = require("express");
const expHB = require("express-handlebars");
var nocache = require('nocache')
const brg_controller = require(`./controllers/burgers_controller`);

var app = express();

//Set Handlebars as the default templating engine.
app.engine("handlebars", expHB({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public/.'));
app.use(nocache());

// Use the express.Router instance in brg_controller
app.use(brg_controller);


app.listen(PORT, function (err) {
    if (err) throw (err);
    console.log("Server listening on port " + PORT);
});

module.exports = {
    exp : null
}