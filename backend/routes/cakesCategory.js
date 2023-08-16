

const express = require('express');
const BirthDayCake  = require('../models/BirthDayCakes');
const WeddingCake = require('../models/WeddingCake')
const PartyCakes = require('../models/PartyCake') 
const CupCakes = require('../models/CupCake')
const {body, validationResult} = require('express-validator');
const path = require('path');
const multer = require('multer');
const router = express.Router();



// middleware functon for store image in database
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})


const upload = multer({storage: storage});


// add birthday cakes
router.post('/birthdaycakes', upload.single('file'), [
    body('title', 'title should be minimum 2 characters').isLength({min: 2}),
    body('description', 'description should be minimum 7 characters').isLength({min: 7}),
],  async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
          }
        let birthdaycake = await BirthDayCake.create({
            title: req.body.title,
            description: req.body.description,
            cost: req.body.cost,
            image: req.file.filename
        })
        res.json({birthdaycake});
        console.log(birthdaycake)
    } catch (error) {
        console.error(error);
        res.status(500).send('Somme Error Occured');
    }
})


// add wedding cakes
router.post('/weddingcake', upload.single('file'), [
    body('title', 'title should be minimum 2 characters').isLength({min: 2}),
    body('description', 'description should be minimum 7 characters').isLength({min: 7}),
],  async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
          }
        let weddingcakeData = await WeddingCake.create({
            title: req.body.title,
            description: req.body.description,
            cost: req.body.cost,
            image: req.file.filename
        })
        res.json({weddingcakeData});
        console.log(weddingcakeData)
    } catch (error) {
        console.error(error);
        res.status(500).send('Somme Error Occured');
    }
})


// add Party cakes
router.post('/partycakes', upload.single('file'), [
    body('title', 'title should be minimum 2 characters').isLength({min: 2}),
    body('description', 'description should be minimum 7 characters').isLength({min: 7}),
],  async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
          }
        let partycakesdata = await PartyCakes.create({
            title: req.body.title,
            description: req.body.description,
            cost: req.body.cost,
            image: req.file.filename
        })
        res.json({partycakesdata});
    } catch (error) {
        console.error(error);
        res.status(500).send('Somme Error Occured');
    }
})



// add cup cakes
router.post('/cupcakes', upload.single('file'), [
    body('title', 'title should be minimum 2 characters').isLength({min: 2}),
    body('description', 'description should be minimum 7 characters').isLength({min: 7}),
],  async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
          }
        let cupcakesdata = await CupCakes.create({
            title: req.body.title,
            description: req.body.description,
            cost: req.body.cost,
            image: req.file.filename
        })
        res.json({cupcakesdata});
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

