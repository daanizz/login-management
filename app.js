const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const path = require('path');
const connectDB = require('./config/db');
const createAdmin = require('./config/createAdmin'); // Import the createAdmin script

const app = express();

// Connect to MongoDB
connectDB();

// Create predefined admin user
createAdmin();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', userRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});