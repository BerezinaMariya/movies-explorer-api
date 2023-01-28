const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const BadRequestError = require('../middlewares/errors/bad-request-error');
const UnauthorizedError = require('../middlewares/errors/unauthorized-error');
const { VALIDATION_ERROR_MESSAGE_EMAIL, VALIDATION_ERROR_MESSAGE_EMAIL_OR_PASS } = require('../utils/validators-consts');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: VALIDATION_ERROR_MESSAGE_EMAIL,
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
}, {
  versionKey: false,
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedError(VALIDATION_ERROR_MESSAGE_EMAIL_OR_PASS));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new BadRequestError(VALIDATION_ERROR_MESSAGE_EMAIL_OR_PASS));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
