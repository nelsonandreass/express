const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.get('/dashboard' , adminController.viewDashboard);

//category
router.get('/category' , adminController.viewCategory);
router.post('/category' , adminController.addCategory);
router.put('/category' , adminController.updateCategory);
router.delete('/category/:id' , adminController.deleteCategory);

//bank
router.post('/bank/' , adminController.addBank);


router.get('/bank' , adminController.viewBank);
router.get('/item' , adminController.viewItem);
router.get('/booking' , adminController.viewBooking);




module.exports = router;