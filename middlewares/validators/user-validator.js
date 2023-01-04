const { celebrate, Joi } = require('celebrate');

const {
  strReq,
  emailReq,
} = require('../../utils/validators-consts');

module.exports.validateUserRegInfo = celebrate({
  body: Joi.object().keys({
    // почта пользователя, по которой он регистрируется.
    // Это обязательное поле, уникальное для каждого пользователя.
    // Должно валидироваться на соответствие схеме электронной почты.
    email: emailReq,
    // хеш пароля. Обязательное поле-строка.
    password: strReq,
    // имя пользователя. Это обязательное поле-строка от 2 до 30 символов.
    name: strReq.min(2).max(30),
  }).unknown(true),
});

module.exports.validateUserAuthInfo = celebrate({
  body: Joi.object().keys({
    email: emailReq,
    password: strReq,
  }).unknown(true),
});

module.exports.validateUserInfo = celebrate({
  body: Joi.object().keys({
    email: emailReq,
    name: strReq.min(2).max(30),
  }).unknown(true),
});
