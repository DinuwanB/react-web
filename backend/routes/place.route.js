const expres = require('express');
const NewPlace = require('../models/places');

const Router = expres.Router();

Router.get('/', function(req, res){
    NewPlace.find()
    .then(newplace => res.json(newplace))
    .catch(err => res.status(400).json('Error : ' + err));
});

Router.post('/add', function(res,req){
    
})