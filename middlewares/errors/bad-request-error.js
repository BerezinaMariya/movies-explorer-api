const { BAD_REQUEST_ERROR_STATUS } = require('../../utils/res-consts');

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = BAD_REQUEST_ERROR_STATUS;
  }
}

module.exports = BadRequestError;
