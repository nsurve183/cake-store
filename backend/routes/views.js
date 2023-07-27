

const express = require('express');
const Views  = require('../models/UserViews');
const {body, validationResult} = require('express-validator');
const router = express.Router();

router.post('/userviews',[
    body('name', 'Fname should be minimum 2 characters').isLength({min: 2}),
    body('description', 'description should be minimum 7 characters').isLength({min: 7}),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
          }
        let views = await Views.create({
            name: req.body.name,
            description: req.body.description
        })
        res.json({views})
        console.log(views)
    } catch (error) {
        console.error(error);
        res.status(500).send('Somme Error Occured');
    }
})


// get all views
router.get('/getuserviews', async (req, res) => {
    try {
   
        // let page = Number(req.query.page) || 1
        // let limit = Number(req.query.limit) || 3
        // let skip = (page - 1) * limit

        let views = await Views.find()
        
        // let views = await Views.find().skip(skip).limit(limit);
        
        res.json(views)
    } catch (error) {
        console.error(error);
        res.status(500).send('Somme Error Occured');
    }
})


module.exports = router;

