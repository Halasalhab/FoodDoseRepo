const express = require('express');
const routers = express.Router();
const userSchema = require('./modules/SignUpModule.js');
const Restaurant = require('./modules/resturantModule.js')
const Category = require('./modules/CategoryModules.js')
const { routes } = require('./server.js');
const db = require('./db.js')

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




// create category
routers.post('/createCat', (req, res) => {
    console.log(req.body)
    let categ = new Category({
        Name: req.body.Name,
        Image: req.body.Image
    })
    categ.save((err, categ) => {
        if (err) return res.status(404).json({ error })
        res.status(201).json({ id: categ._id })
    })
})

// create restaurants 
routers.post('/createRes', (req, res) => {

    let restau = new Restaurant({
        resCategory: req.body.resCategory,
        Name: req.body.Name,
        Image: req.body.Image,
        Phone: req.body.Phone,
        Address: req.body.Address
    })
    restau.save((err, restau) => {
        if (err) return res.status(404).json({ error })
        res.json(restau)
    })
})


//find  restaurant  by name 

routers.post('/restFind', (req, res) => {

    Restaurant.findOne({ Name: req.body.Name })
        .populate('resCategory')
        .exec((err, rest) => {
            if (err) return res.status(404).json({ success: false })
            res.json(rest)
        })
})



//find  restaurant  by id
routers.post('/restFind/:id', (req, res) => {
    Restaurant.findOne({ id: req.body.id })
        .populate('resCategory')
        .exec((err, rest) => {
            if (err) return res.status(404).json({ success: false })
            res.json(rest)
        })
})



module.exports = routers;
