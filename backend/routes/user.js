

const express = require('express');
const Contact  = require('../models/Contact');
const {body, validationResult} = require('express-validator');
const router = express.Router();

router.post('/usercontact',[
    body('fname', 'Fname should be minimum 2 characters').isLength({min: 2}),
    body('phnumber', 'Phone number should be minimum 10 characters').isLength({min: 10}),
    body('massage', 'Massage should be minimum 7 characters').isLength({min: 10}),
    body('email', 'Pls enter a valid email').isEmail()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
          }
        let contact = await Contact.create({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            phnumber: req.body.phnumber,
            massage: req.body.massage
        })
        res.json({contact})
        console.log(contact)
    } catch (error) {
        console.error(error);
        res.status(500).send('Somme Error Occured');
    }
})


module.exports = router;

