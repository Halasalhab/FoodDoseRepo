const express = require('express');
const routers = express.Router();
const userSchema = require('./modules/SignUpModule.js');
// const login = require('./controllers/logIn')

routers.get('/', function (req, res, next) {
    res.send('hello world ');
});

//Home rout 
// routers.post('/', function (req, res) {  
// });

// SignUP rout / post data 
routers.post('/signup', (req, res) => {
    const signedUpUser = new userSchema({
        UserID: req.body.UserID,
        UserName: req.body.UserName,
        Password: req.body.Password,
        Email: req.body.Email,
    })
    signedUpUser.save()
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})


//LogIn route 
routers.post('/login', (req, res) => {
    // console.log('login worked')
    const { Email, Password } = req.body;
    userSchema.findOne({
        where: { Email, Password },
    })
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(404).send(err, "error"));
})

routers.post('/fastfoodres', (req, res) => {

})

routers.post('/fastfoodres/royal', (req, res) => {

})

module.exports = routers;
