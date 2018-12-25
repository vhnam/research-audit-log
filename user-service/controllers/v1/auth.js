const authService = require('../../services/auth');

module.exports = {
  login: async (req, res) => {
    try {
      const user = {
        username: req.body.username,
        password: req.body.password
      };
      const token = await authService.login(user);

      if (!token) {
        res.status(401).json({ message: 'Unauthorized' });
      }

      res.status(200).json({ token });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  logout: async (req, res) => {}
};
