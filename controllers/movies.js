const Movie = require('../models/movie');
const {
  OK_STATUS, // 200
  CREATED_STATUS, // 201
  BAD_REQUEST_ERROR_MESSAGE, // 400
  FORBIDDEN_ERROR_MESSAGE, // 403
  NOT_FOUND_ERROR_MESSAGE, // 404
} = require('../utils/res-consts');

const BadRequestError = require('../middlewares/errors/bad-request-error');
const ForbiddenError = require('../middlewares/errors/forbidden-error');
const NotFoundError = require('../middlewares/errors/not-found-error');

module.exports.getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.status(OK_STATUS).send(movies))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  Movie.create({
    ...req.body,
    owner: req.user._id,
  })
    .then((movie) => res.status(CREATED_STATUS).send(movie))
    .catch(next);
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params._id)
    .orFail(() => {
      throw new NotFoundError(NOT_FOUND_ERROR_MESSAGE);
    })
    .then((movie) => {
      if (req.user._id !== movie.owner._id.toString()) {
        throw new ForbiddenError(FORBIDDEN_ERROR_MESSAGE);
      } else {
        return movie.remove();
      }
    })
    .then(() => res.status(OK_STATUS).send({ message: 'Фильм удален' }))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError(BAD_REQUEST_ERROR_MESSAGE));
      } else {
        next(err);
      }
    });
};
