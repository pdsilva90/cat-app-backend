const express = require('Express');
const app = express();
const port = 3000;

//ROUTES
//GET all cats
app.get('/cats', (req,res) => {
    res.send('This is the GET ROUTE for all cats!');
});

//POST a new cat
app.post('/cats', (req,res) => {
    res.send('This is the POST route for a new cat!');
});

//GET a single cat
app.get('/cats/:id', (req, res) => {
    res.send(`This is the GET route for a single cat found at ${ req.params.id }`);
});

//PUT to update  a cat
app.put('/cats/:id', (req, res) => {
    res.send(`This is the PUT route for a cat: ${ req.params.id }`)
});

//DELETE to destroy a cat
app.delete('cats/:id', (req, res) => {
    res.send(`This is the Delete route for a cat: Bye bye ${ req.params.id}`)
});

app.listen(port, () => {
    console.log('I am listening at port 3000');
});
