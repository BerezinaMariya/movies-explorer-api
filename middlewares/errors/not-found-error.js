const { NOT_FOUND_ERROR_STATUS } = require('../../utils/res-consts');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = NOT_FOUND_ERROR_STATUS;
  }
}

module.exports = NotFoundError;
