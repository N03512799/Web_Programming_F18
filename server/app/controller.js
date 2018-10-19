const express = require('express');
const {Interface, User} = require('./model');

var interface = new Interface();

const app = express.Router();

app.get("/", function(req, res){
    res.send({...interface});
});

app.post('/users', (req, res) => {
    const newUser = new User(req.body.url, app.users.length+1);
    game.users.push(newUser);
    res.send(newUser);
});


module.exports = app;