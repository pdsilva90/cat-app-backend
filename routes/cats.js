const express = require('express');
const router = express.Router();

//ROUTES
//GET all cats
router.get('/cats', (req,res) => {
    res.send('This is the GET ROUTE for all cats!');
});

//helloo 

//POST a new cat
router.post('/cats', (req,res) => {
    res.send('This is the POST route for a new cat!');
});

//GET a single cat
router.get('/cats/:id', (req, res) => {
    res.send(`This is the GET route for a single cat found at ${ req.params.id }`);
});

//PUT to update  a cat
router.put('/cats/:id', (req, res) => {
    res.send(`This is the PUT route for a cat: ${ req.params.id }`)
});

//DELETE to destroy a cat
router.delete('cats/:id', (req, res) => {
    res.send(`This is the Delete route for a cat: Bye bye ${ req.params.id}`)
});


module.export = router