var express = require('express')
var app = express()
var path = require('path')
var bodyparser = require('body-parser')
var mongoose = require('mongoose')

//setup connection to mongoose
mongoose.connect('mongodb://localhost:27017/gameEntries',{
    useNewURLParser:true
}).then(function(){
    console.log("Connected to Mongo DB Database");
}).catch(function(err){
    console.log(err)
})

//basic code for saving an entry
//model of data
var Game = mongoose.model('Game', {nameofGame:String})

var game = new Game({nameofGame:"Skyrim"})
game.save().then(function(){
    console.log("Game Saved")
})

//sets up static server and sets up connection
app.use(express.static(__dirname+"/views"))
app.listen(3000, function(){
    console.log("Listening on Port 3000")
})