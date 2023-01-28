const router = require('express').Router();

const { validateMovieData, validateMovieId } = require('../middlewares/validators/movie-validator');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', validateMovieData, createMovie);
router.delete('/:_id', validateMovieId, deleteMovie);

module.exports = router;
