const Restaurant = require('../modules/resturantModule.js')


let RestaurantController =
{
    find: async (req, res) => {
        let found = await Restaurant.find({ name: req.params.Name });
        res.json(found);
    },
    all: async (req, res) => {
        let allRestaurants = await Restaurant.find();
        res.json(allRestaurants);
    },
    create: async (req, res) => {
        let newRestaurant = new Restaurant(req.body);
        let saveRestaurant = await newRestaurant.save();
        res.json(saveRestaurant);
    },
    getAllRestaurant: async (req, res) => {
        let foundRestaurant = await Restaurant.find({ name: req.params.Name }).populate('category');
        res.json(foundRestaurant)
    }


}


module.exports = RestaurantController