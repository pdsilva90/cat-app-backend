const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const catRoutes = require('./routes/cats');

require('dotenv').config()

//db connection
require('./config/database');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome'});
})

//routes
app.use('/cats', catRoutes);

app.listen(port, () => {
    console.log('I am listening at port 3000');
});
