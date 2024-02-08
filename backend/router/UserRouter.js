const express = require('express');
const mongoose = require('mongoose');
const UserRouter = express.Router();
const {join} = require('path'); 

const User = require('../models/Users');



UserRouter.post('/signup', async (req, res) => {



    let newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password
    });
    try{
        const user = await newUser.save();
        res.status(201).json(user);
        console.log(`User ${user.username} created`)
    } catch(err){
        res.status(400).json({message: err.message});
    }
    
});

UserRouter.post('/login', async (req, res) => {

    let username = req.body.username;
    let password = req.body.password;
    try{
        const user = await User.findOne({username: username, password: password});
        if(!user) return res.status(401).json({message: 'Invalid username or password'});
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({message: err.message});
    }

});
module.exports = UserRouter;