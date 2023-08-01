

const express = require('express');
const Views  = require('../models/UserViews');
const fetchUser = require('../middlewear/fetchuser')
const {body, validationResult} = require('express-validator');
const router = express.Router();


// Add User Views 'localhost:5000/api/view/addviews' Login Required
router.post('/addviews', fetchUser ,[
    body('name', 'Name should be minimum 2 characters').isLength({min: 2}),
    body('description', 'description should be minimum 7 characters').isLength({min: 7}),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
          }
          const {name, description} = req.body
          let userviews = await Views.create({
            name: name,
            description: description,
            user: req.user.id
          })
          const saveUserView = await userviews.save();
          res.send(saveUserView);
          console.log(saveUserView)
    } catch (error) {
        console.error(error);
        res.status(500).send('Add Views Error Occured');
    }
})


// get all views of users localhost:5000/api/view/getuserviews
router.get('/getuserviews', async (req, res) => {
    try {
   
        // let page = Number(req.query.page) || 1
        // let limit = Number(req.query.limit) || 3
        // let skip = (page - 1) * limit

        let views = await Views.find()
        
        // let views = await Views.find().skip(skip).limit(limit);
        
        res.json(views)
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('Somme Error Occured');
    }
})

// Get Login User Views 'localhost:5000/api/view/fetchuserviews' Login Requred
router.get('/fetchuserviews', fetchUser, async (req, res) => {
    try {
        const userviews = await Views.find({user: req.user.id});
        res.json(userviews);
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('User View Error Occured');
    }
})


module.exports = router;

