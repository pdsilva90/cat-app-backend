const mongoose = require('mongoose');
const Cat = require('../models/cat');

const getAllCats = async (req, res) => {
    try {
        const cats = await Cat.find({});
        res.json(cats)
    } catch {
        res.json({ msg: 'There was a problem getting all of the cats'});
    }
}

const createCat = async (req, res) => {
    try {
        const cat = await Cat.create(req.body)
        res.json(cat)
    } catch {
        res.json({ msg: 'There was a problem creating your cat.'})
    }
}

const getACat = async (req, res) => {
    try {
        const cat = await Cat.findById(req.params.id);
        res.json(cat);
    } catch {
        res.json({ msg: 'There was a problem getting your cat'})
    }
}

const updateCat = async (req, res) => {
    try {
        const updatedCat = await Cat.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true});
        res.json(updatedCat);
    } catch {
        res.json({ msg: 'There was a problem updating your cat'})
    }
}

const removeCat = async (req, res) => {
    try {
        await Cat.findByIdAndDelete(req.params.id);
        res.json({ msg: 'This cat has been adopted'})
    } catch {
        res.json({ msg: 'There was a problem removing your cat'})
    }
}

module.exports = {
    getAllCats,
    createCat, 
    getACat,
    updateCat,
    removeCat
}