const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Route for the root path (/)
router.get('/', (req, res) => {
  res.render('login'); // Render the login page
});

// Route for the register page
router.get('/register', (req, res) => {
  res.render('register'); // Render the register page
});

// Route for the login page (GET request)
router.get('/login', (req, res) => {
  res.render('login'); // Render the login page
});

// // Route for the Admin page 
// router.get('/admin', (req, res) => {
//   res.render('admin'); // Render the login page
// });

// Other routes
router.post('/login', userController.login); // POST request for login form submission
router.post('/register', userController.register); // POST request for registration form submission
router.post('/delete/:id', userController.deleteUser); // POST request for deleting a user

module.exports = router;