const mongoose = require('mongoose');
const { Joi } = require('celebrate');

const URL_REGEX = /^(http|https):\/\/[w{3}.]?[\w-._~:/?#[\]@!$&'()*+,;=]#?/;

const validateId = (value, helpers) => {
  if (!mongoose.isObjectIdOrHexString(value)) {
    return helpers.error('any.invalid');
  }
  return value;
};

const isIdValid = Joi.string().required().custom(validateId, 'custom validation');
const strReq = Joi.string().required();
const numReq = Joi.number().required();
const urlReq = Joi.string().required().regex(URL_REGEX);
const emailReq = Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ru'] } });

module.exports = {
  URL_REGEX,
  isIdValid,
  strReq,
  numReq,
  urlReq,
  emailReq,
};
