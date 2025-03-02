const User = require('../models/userModel'); // Declare this only once

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(400).send('Invalid email or password');

  if (user.isAdmin) {
    const users = await User.find({});
    return res.render('admin', { users });
  }

  res.render('user', { user });
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  await user.save();
  res.redirect('/login');
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect('/admin');
};