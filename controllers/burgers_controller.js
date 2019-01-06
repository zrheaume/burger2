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
};

router.get("/", function(req, res){
    console.log("Request")
    loadBurgers(res);
});

router.post("/api/build", function(req,res){
    let burgDat = req.body
    let burgInst = new model.BurgerInsertPacket(burgDat)
    model.addBurger(burgInst, function(){
        model.getBurgers(function(card){
            res.redirect("/");
        })
    });
});



module.exports = router;