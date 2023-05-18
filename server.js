const express = require('Express');
const app = express();
const port = 3000;
const cors = require('cors');
const catRouter = require('./routes/cats')

//middleware
app.use(express.urlencoded({ extended: true }));


//routes
app.use('/cats', catRoutes);
app.use(cors());

app.listen(port, () => {
    console.log('I am listening at port 3000');
});
