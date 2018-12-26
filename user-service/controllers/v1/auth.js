const authService = require('../../services/auth');

module.exports = {
  login: async (req, res) => {
    try {
      const user = {
        username: req.body.username,
        password: req.body.password
      };
      const loggedUser = await authService.login(user);

      if (!loggedUser) {
        res.status(401).json({ message: 'Unauthorized' });
      }

      res.status(200).json(loggedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  logout: async (req, res) => {}
};
