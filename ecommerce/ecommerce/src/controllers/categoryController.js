// category controller

const Category = require('../models/category');

getCategories = (req, res) => {
    Category.findAll()
        .then(categories => {
            res.json({
                categories: categories
            });
        })
        .catch(err => console.log(err));
};


module.exports = {
    getCategories
};