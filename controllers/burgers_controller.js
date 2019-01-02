// TODO 
// // Import express and models/burger.js
// Create router for app
const DIR = __dirname
const express = require("express");
const model = require('./../models/burger');

var router = express.Router();

function loadBurgers(pipe){
    model.getBurgers(function(card){
        console.log(card)
        pipe.render("index", {brgList: card});
    });
}

router.get("/", function(req, res){
    console.log("Request")
    loadBurgers(res);
});



router.post("/build", function(req,res){
    //TODO Call model function to validate & insert new burger
    let burgDat = req.body
    let burgInst = new model.BurgerInsertPacket(burgDat)
    model.addBurger(burgInst, function(a, b, c){
        console.log(a)
        console.log(b)
        console.log(c)
        model.getBurgers(function(card){
            res.render("index", {brgList: card});
        })
    });
});



module.exports = router;