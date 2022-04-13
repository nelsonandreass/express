const Category = require('../models/Categories');

module.exports = {
    viewDashboard: (req , res) => {
        res.render('admin/dashboard/dashboard.ejs');
    },

    viewCategory: async (req , res) => {
        const category = await Category.find();
        
        res.render('admin/category/category.ejs' , {category});
    },

    addCategory: async (req , res) => {
        const {name} = req.body;
        await Category.create({ name });
        res.redirect('/admin/category');
       
    },

    viewBank: (req , res) => {
        res.render('admin/bank/bank.ejs');
    },

    viewItem: (req , res) => {
        res.render('admin/item/item.ejs');
    },

    viewBooking: (req , res) => {
        res.render('admin/booking/booking.ejs');
    },
}