

const express = require('express');
const router = express.Router();
const Users = require('../models/Users')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middlewear/fetchuser');

let secret_msg = "nikhilisareamanager"


// Create a new user 'localhost:5000/api/auth/createusers' No Login Required
router.post('/createusers', [
    body('name', "Name should be min 3 character").isLength({min: 3}),
    body('username', "Username should be min 4 character").isLength({min: 4}),
    body('email', "Enter A Valid Email").isEmail(),
    body('password', "Password should be min 6 character").isLength({min: 5}),
], async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({errors: errors.array()});
        }

        let user = await Users.findOne({email: req.body.email, username: req.body.username})
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)
        if(user){
            return res.status(400).send({errors : 'User Already Exist'})
        }

        user = await Users.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: secPass
        })
        
        let data = {user:{id: user.id}}
        let authtoken = jwt.sign(data, secret_msg)
        res.json({authtoken});

        console.log(authtoken)

    } catch (error) {
        console.error(error.massage);
        res.status(500).send('Create Users Error Occured');
    }
})

// user login 'localhost:5000/api/auth/login' No Login Required
router.post('/login', [
    body('username', "Username should be min 4 character").isLength({min: 4}),
    body('password', "Password should be min 6 character").isLength({min: 5})
], async (req, res) => {

    try {
         const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({errors: errors.array()});
        }
        const {username, password} = req.body

        let user = await Users.findOne({username}) 
        if(!user){
            return res.status(400).json({errors: "Pls Enter A Valid Credential"});
        }

        const comapre = await bcrypt.compare(password, user.password);
        if(!comapre){
            return res.status(400).json({errors: "Pls Enter A Valid Credential"});
        }

        let data = {user:{id: user.id}}
        let authtoken = jwt.sign(data, secret_msg)
        res.json({authtoken})
        
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('Login Error Occured');
    }
})


// Route 3 get login user data 'localhost:5000/api/auth/getuser' And login required
router.post('/getuser', fetchUser, async (req,res) => {
    try {
        let userId = req.user.id;
        const user = await Users.findById(userId).select('-password');
        res.send(user);
        } catch (error) {
            console.error(error.massage);
            res.status(500).send({error: 'Get User Error Occured'}); 
        }
} )

module.exports = router;