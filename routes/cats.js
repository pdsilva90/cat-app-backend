const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Cat = require('../models/cat');
const catController = require('../controllers/cats');


async function main() {
  await mongoose.connect('mongodb+srv://pdsilva90:Pdsilva12!@cluster0.erqhdng.mongodb.net/catAppDB?retryWrites=true&w=majority');
console.log('Connected to MongoDB');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
 main().catch(err => console.log(err));


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


module.export = router