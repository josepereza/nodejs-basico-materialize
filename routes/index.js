const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    res.render('index', {title: 'MI APP'});


})


router.get('/contact', (req, res) =>{
    res.render('contact',{title: 'MI CONTACT-APP'});


})

module.exports =router;