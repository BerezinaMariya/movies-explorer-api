const { FORBIDDEN_ERROR_STATUS } = require('../../utils/res-consts');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = FORBIDDEN_ERROR_STATUS;
  }
}

module.exports = ForbiddenError;
