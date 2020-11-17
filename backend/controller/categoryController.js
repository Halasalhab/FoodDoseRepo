
const Category = require('../modules/CategoryModules.js');

let CategoryController =
{
    find: async (req, res) => {
        let found = await Category.find({ name: req.params.Name });
        res.json(found);

    },
    findId: async (req, res) => {
        let found = await Category.find({ CategoryID: req.params.CategoryID });
        res.json(found);
        
    },
    all: async (req, res) => {
        let allCateogries = await Category.find();
        res.json(allCateogries);
    },
    create: async (req, res) => {
        let newCategory = new Category(req.body);
        let saveCategory = await newCategory.save();
        res.json(saveCategory);
    },
    getAllRestaurant: async (req, res) => {
        let foundCategory = await Category.find({ name: req.params.Name }).populate('restaurants');
        res.json(foundCategory)
    }


}


module.exports = CategoryController