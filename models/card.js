const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^((http|https):\/\/(www\.)?([\w\W]{1,})\.([a-zA-z]{2,10})([\w\W]{1,})?(#)?)$/.test(v);
      },
      message: 'Неправильный URL!',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes:
    [{
      type: mongoose.Schema.Types.ObjectId,
      default: [],
    }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
