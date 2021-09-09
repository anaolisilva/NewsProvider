const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
  
  
  async login (req, res, next) {
    const { username, password } = req.body;
  
    const userLoggedIn = await User.query().findOne({ username: username });

    const validPassword = await bcrypt.compare(password, userLoggedIn.password);
  
    if (!userLoggedIn.username || !validPassword) {
      return res.status(403).send('Wrong username or password.');
    } else {
      return res.send("Logged in.");
    }
  
  }

}
