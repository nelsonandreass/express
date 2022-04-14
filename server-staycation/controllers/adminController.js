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

    updateCategory: async (req , res) => {
        const {id, name} = req.body;
        const category = await Category.findOne({_id : id});
       
        category.name = name;
        await category.save();
        res.redirect('/admin/category');

    },

    deleteCategory: async (req , res) => {
        const { id } = req.params;
        const category = await Category.findOne({_id : id});
        await category.remove();
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