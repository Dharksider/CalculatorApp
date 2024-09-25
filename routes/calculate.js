const express = require('express');
const router =  express.Router();
const {getAddHandler, getSubHandler, getDivHandler, getMultHandler} = require('../controllers/v1.0/userControllers')


//const users = []; //simulated database

router.get('/add', getAddHandler)

router.get('/subtract', getSubHandler)

router.get('/divide', getDivHandler)

router.get('/multiply', getMultHandler)


// router.post('/operate', deleteUserHandler)
module.exports = router;
