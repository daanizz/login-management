const User = require('../models/userModel');

const createAdmin = async () => {
  const adminEmail = 'admin@example.com'; // Predefined admin email
  const adminPassword = 'admin123'; // Predefined admin password

  // Check if admin already exists
  const adminExists = await User.findOne({ email: adminEmail });
  if (!adminExists) {
    // Create admin user
    const admin = new User({
      name: 'Admin',
      email: adminEmail,
      password: adminPassword,
      isAdmin: true,
    });
    await admin.save();
    console.log('Admin user created successfully');
  } else {
    console.log('Admin user already exists');
  }
};

module.exports = createAdmin;