const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      if (users.length === 0) {
        res.status(404).send({ message: 'Пользователи не найдены!' });
        return;
      }
      res.status(200).send(users);
    })
    .catch((err) => res.status(500).send(err));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: `Ошибка при валидации: ${err}` });
      } else {
        res.status(500).send({ message: `Внутрення ошибка сервера: ${err}` });
      }
    });
};

const getUserId = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
        return;
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: `Передан некорректный id: ${err}` });
        return;
      }
      res.status(500).send({ message: `Внутренняя ошибка сервера: ${err}` });
    });
};

const updateUser = (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    {
      name: req.body.name,
      about: req.body.about,
    },
    {
      new: true,
      runValidators: true,
    },
  )
    .orFail()
    .then((newUser) => {
      res.status(200).send(newUser);
    })
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'ValidationError') {
        res.status(400).send({ message: `Ошибка при валидации: ${err}` });
      } else {
        res.status(500).send({ message: `Внутренняя ошибка сервера: ${err}` });
      }
    });
};

const updateAvatar = (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    {
      avatar: req.body.avatar,
    },

    {
      new: true,
      runValidators: true,
    },
  )
    .orFail(new Error('ValidationError'))
    .then((newAvatar) => {
      res.status(200).send(newAvatar);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: `Ошибка при валидации: ${err}` });
      } else {
        res.status(500).send({ message: `Внутренняя ошибка сервера: ${err}` });
      }
    });
};

module.exports = {
  getUsers, createUser, getUserId, updateUser, updateAvatar,
};
