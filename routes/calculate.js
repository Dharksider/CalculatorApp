const express = require('express');
const router =  express.Router();
const {getAddHandler, getSubHandler, getDivHandler, getMultHandler} = require('../controllers/v1.0/userControllers')


//const users = []; //simulated database

router.post('/add', getAddHandler)

router.post('/subtract', getSubHandler)

router.post('/divide', getDivHandler)

router.post('/multiply', getMultHandler)


// router.post('/operate', deleteUserHandler)
module.exports = router;
