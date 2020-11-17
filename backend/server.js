const express = require('express');
const app = express();
const routers = require('./routes');

const bodyParser = require('body-parser');
const database = require('./db');
var cors = require('cors')

app.use(cors())

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../frontend/build'))

app.get('/', (req, res) => {

  res.json({ message: "welcome in our app" })

})
app.use('/fooddose', routers)
module.exports = app;

