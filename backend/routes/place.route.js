const expres = require('express');
const NewPlace = require('../models/places');

const Router = expres.Router();

Router.get('/', function(req, res){
    NewPlace.find()
    .then(newplace => res.json(newplace))
    .catch(err => res.status(400).json('Error : ' + err));
});
// CREATE PLACE
Router.post('/add', function(req,res){
    const placeName = req.body.placeName;
    const imageUrl  = req.body.imageUrl;
    const description = req.body.description;

    const newPlace = new NewPlace ({
        placeName,
        imageUrl,
        description
    });

    newPlace.save()
    .then(() => res.json('New Place Added!'))
    .catch(err => res.status(400).json('Error: ' +err));
}); 
// DELETE PLACE
Router.get('/:id', function(req,res){
    NewPlace.findById(req.params.id)
    .then(newplace => res.json(newplace))
    .catch(err => res.status(400).json('Error: ' +err))
}); 

Router.delete('/:id', function(req, res) {
    NewPlace.findByIdAndDelete(req.params.id)
    .then(() => res.json('Place Deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = Router;