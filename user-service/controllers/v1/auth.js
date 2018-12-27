import { sendKafkaMessage } from '../../libs/kafka';

const authService = require('../../services/auth');

module.exports = {
  login: async (req, res) => {
    try {
      const user = {
        username: req.body.username,
        password: req.body.password
      };
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      const useragent = req.headers['user-agent'];

      const loggedUser = await authService.login(user);

      if (!loggedUser) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      sendKafkaMessage('User', {
        ip,
        useragent,
        data: {
          user: loggedUser.id
        },
        action: 'Sign in',
        time: new Date()
      });

      res.status(200).json(loggedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  logout: async (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const useragent = req.headers['user-agent'];
    const { user } = req.body;

    sendKafkaMessage('User', {
      ip,
      useragent,
      data: {
        user
      },
      action: 'Sign out',
      time: new Date()
    });

    res.status(200).json({ message: 'OK' });
  }
};
