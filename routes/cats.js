const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Cat = require('../models/cat');
const catController = require('../controllers/cats');




//ROUTES
//GET all cats
router.get('/', catController.getAllCats);

//POST a new cat
router.post('/', catController.createCat);

//GET a single cat
router.get('/:id', catController.getACat);

//PUT to update  a cat
router.put('/:id', catController.updateCat);

//DELETE to destroy a cat
router.delete('/:id', catController.removeCat);


module.exports = router