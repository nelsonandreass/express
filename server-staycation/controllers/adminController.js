const Category = require('../models/Categories');

module.exports = {
    viewDashboard: (req , res) => {
        res.render('admin/dashboard/dashboard.ejs');
    },

    viewCategory: async (req , res) => {

        try {
            const category = await Category.find();
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = {message: alertMessage, status: alertStatus};

            res.render('admin/category/category.ejs' , {category , alert});
        } catch (error) {
            res.render('admin/category/category.ejs' , {category});
            
        }
       
    },

    addCategory: async (req , res) => {
        try {
            const {name} = req.body;
            await Category.create({ name });
            req.flash('alertMessage' , 'Success add new category');
            req.flash('alertStatus' , 'success');

            res.redirect('/admin/category');
        } catch (error) {
            req.flash('alertMessage' , `$error.message`);
            req.flash('alertStatus' , 'danger');
            res.redirect('/admin/category');
        }
    },

    updateCategory: async (req , res) => {

        try {
            const {id, name} = req.body;
            const category = await Category.findOne({_id : id});
            category.name = name;
            await category.save();
            req.flash('alertMessage' , 'Success update category');
            req.flash('alertStatus' , 'success');
            res.redirect('/admin/category');
        } catch (error) {
            req.flash('alertMessage' , `$error.message`);
            req.flash('alertStatus' , 'danger');
            res.redirect('/admin/category');
        }
       

    },

    deleteCategory: async (req , res) => {
        try {
            const { id } = req.params;
            const category = await Category.findOne({_id : id});
            await category.remove();
            req.flash('alertMessage' , 'Success remove category');
            req.flash('alertStatus' , 'success');
            res.redirect('/admin/category');
        } catch (error) {
            req.flash('alertMessage' , `$error.message`);
            req.flash('alertStatus' , 'danger');
            res.redirect('/admin/category');
        }
      
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