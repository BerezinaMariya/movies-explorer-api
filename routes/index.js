const router = require('express').Router();

const { validateUserRegInfo, validateUserAuthInfo } = require('../middlewares/validators/user-validator');
const { login, createUser, logout } = require('../controllers/users');
const auth = require('../middlewares/auth');

const NotFoundError = require('../middlewares/errors/not-found-error');
const { PAGE_404_ERROR_MESSAGE } = require('../utils/res-consts');

const userRouter = require('./users');
const movieRouter = require('./movies');

router.post('/signup', validateUserRegInfo, createUser);
router.post('/signin', validateUserAuthInfo, login);

router.use(auth);
router.use('/users', userRouter);
router.use('/movies', movieRouter);
router.post('/signout', logout);

router.use(() => {
  throw new NotFoundError(PAGE_404_ERROR_MESSAGE);
});

module.exports = router;
