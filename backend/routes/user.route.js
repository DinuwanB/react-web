const express = require('express');
const NewUser = require('../models/user.js');

const Router = express.Router();

Router.get('/', function(req, res)  {
    NewUser.find()
    .then(newuser => res.json(newuser))
    .catch(err => res.status(400).json('Error :' + err));
});

Router.post('/add', function(req, res){
    const userName = req.body.userName;
    const email    = req.body.email;
    const birthday = req.body.birthday;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    const newUser = new NewUser({
        userName,
        email,
        birthday,
        password, 
        confirmPassword
    });

    newUser.save()
    .then(() => res.json('New User Added'))
    .catch(err => res.status(400).json('Error :' + err));
});
// DELETE USER
Router.get('/:id', function(req,res){
    NewUser.findById(req.params.id)
    .then(newuser => res.json(newuser))
    .catch(err => res.status(400).json('Error: ' +err))
}); 

Router.delete('/:id', function(req, res) {
    NewUser.findByIdAndDelete(req.params.id)
    .then(() => res.json('User Deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = Router;
