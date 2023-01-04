const { CONFLICT_ERROR_STATUS } = require('../../utils/res-consts');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CONFLICT_ERROR_STATUS;
  }
}

module.exports = ConflictError;
