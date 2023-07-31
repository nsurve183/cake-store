

const express = require('express');
const BirthDayCake  = require('../models/BirthDayCakes');
const WeddingCake = require('../models/WeddingCake')
const PartyCakes = require('../models/PartyCake') 
const CupCakes = require('../models/CupCake')
const {body, validationResult} = require('express-validator');
const router = express.Router();


router.post('/birthdaycakes',[
    body('title', 'Fname should be minimum 2 characters').isLength({min: 2}),
    body('description', 'description should be minimum 7 characters').isLength({min: 7}),
], async (req, res) => {
    console.log(req)
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
          }
        let birthdaycake = await BirthDayCake.create({
            title: req.body.title,
            description: req.body.description,
            cost: req.body.cost,
        })
        res.json({birthdaycake})
    } catch (error) {
        console.error(error);
        res.status(500).send('Somme Error Occured');
    }
})



// wedding cake
router.post('/weddingcake', [
    body('title', 'Title should be minimum 2 characters').isLength({min: 2}),
    body('description', 'Description should be minimum 7 characters').isLength({min: 7}),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
          } 

          let wcake = await WeddingCake.create({
            title: req.body.title,
            description: req.body.description,
            cost: req.body.cost
          })
        //   console.log("🚀 ~ file: chocolateCake.js:50 ~ ], ~ weddingc̥ake:", wcake)
          res.json({wcake})
          console.log(wcake)
    } catch (error) {
        console.error(error);
        res.status(500).send('Somme Error Occured');
    }
})


// cup cakes
router.post('/cupcakes', [
    body('title', 'Title should be minimum 2 characters').isLength({min: 2}),
    body('description', 'Description should be minimum 7 characters').isLength({min: 7}),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
          } 

          let cupcake = await CupCakes.create({
            title: req.body.title,
            description: req.body.description,
            cost: req.body.cost
          })
          console.log("🚀 ~ file: cakesCategory.js:77 ~ ], ~ cupcake:", cupcake)
          res.json({cupcake})
          console.log(cupcake)
    } catch (error) {
        console.error(error);
        res.status(500).send('Somme Error Occured');
    }
})

// party cake
router.post('/partycakes', [
    body('title', 'Title should be minimum 2 characters').isLength({min: 2}),
    body('description', 'Description should be minimum 7 characters').isLength({min: 7}),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
          } 

          let partycake = await PartyCakes.create({
            title: req.body.title,
            description: req.body.description,
            cost: req.body.cost
          })
          console.log("🚀 ~ file: cakesCategory.js:103 ~ ], ~ partycake:", partycake)
          res.json({partycake})
    } catch (error) {
        console.error(error);
        res.status(500).send('Somme Error Occured');
    }
})


// get birthday cakes date
router.get('/getbirthdaycakes', async (req, res) => {
    try {
        let getBirthDayCake = await BirthDayCake.find();
        res.json(getBirthDayCake)
    } catch (error) {
        console.error(error);
        res.status(500).send('Birthday Cake data error');
    }
})

// get wedding cakes date
router.get('/getweddingcakes', async (req, res) => {
    try {
        let getWeddingCakes = await WeddingCake.find();
        res.json(getWeddingCakes)
    } catch (error) {
        console.error(error);
        res.status(500).send('Wedding Cake data error');
    }
})

// get party cakes date
router.get('/getpartycakes', async (req, res) => {
    try {
        let getPartyCakes = await PartyCakes.find();
        res.json(getPartyCakes)
    } catch (error) {
        console.error(error);
        res.status(500).send('Wedding Cake data error');
    }
})

// get cup cakes date
router.get('/getcupcakes', async (req, res) => {
    try {
        let getCupCakes = await CupCakes.find();
        res.json(getCupCakes)
    } catch (error) {
        console.error(error);
        res.status(500).send('Cup Cake data error');
    }
})


module.exports = router;

