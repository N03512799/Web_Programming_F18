const express = require('express');
const {Interface, User} = require('./model');

var interface = new Interface();

const app = express.Router();

app.get("/", function(req, res){
    res.send({...interface});
});