const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Cat = require('../models/cat');


async function main() {
  await mongoose.connect('mongodb+srv://pdsilva90:Pdsilva12!@cluster0.erqhdng.mongodb.net/catAppDB?retryWrites=true&w=majority');
console.log('Connected to MongoDB');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
 main().catch(err => console.log(err));


//ROUTES
//GET all cats
router.get('/', async (req,res) => {
    try {
        const cats = await Cat.find({});
        res.json(cats)
    } catch {
        res.json({ msg: 'There was a problem getting all of the cats!'});
    }
});

//POST a new cat
router.post('/', async (req,res) => {
    try {
    const cat = await Cat.create(req.body);
    res.json(cat);
    } catch {
    res.json({ msg: 'There was a problem creating your cat.'});
    }
});

//GET a single cat
router.get('/:id', async (req, res) => {
    try {
        const cat = await Cat.findById(req.params.id);
        res.json(cat)
    } catch {
        res.json({ msg: 'There was a problem getting your cat.'});
    }
});

//PUT to update  a cat
router.put('/:id', async (req, res) => {
    try {
        const updatedCat = await Cat.findByIdAndUpdate(req.params.id, { set: {name: req.body.name}}, { new: true })
        //new returns the update object instead of the previous object 
        res.json(updateCat);
    } catch {
        res.json({ msg: 'There was problem updating your cat.'})
    }
});

//DELETE to destroy a cat
router.delete('/:id', async (req, res) => {
    try {
        await Cat.findByIdAndDelete(req.params.id);
        res.json({ msg: 'This cat has successfully been adopted'});
    } catch {
        res.json({ msg: 'There was a problem deleting your cat'})
    }
});


module.export = router