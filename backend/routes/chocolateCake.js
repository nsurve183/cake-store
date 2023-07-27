

const express = require('express');
const ChocolateCake  = require('../models/ChoclateCakes');
const {body, validationResult} = require('express-validator');
const router = express.Router();


router.post('/chocolatecake',[
    body('title', 'Fname should be minimum 2 characters').isLength({min: 2}),
    body('description', 'description should be minimum 7 characters').isLength({min: 7}),
    body('image', 'Pls Upload Cake Image').isLength({min: 1})
], async (req, res) => {
    console.log(req)
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
          }
        let chocolatecake = await ChocolateCake.create({
            title: req.body.title,
            description: req.body.description,
            cost: req.body.cost
        })
        res.json({chocolatecake})
        console.log(chocolatecake)
        console.log(req)
    } catch (error) {
        console.error(error);
        res.status(500).send('Somme Error Occured');
    }
})


module.exports = router;

