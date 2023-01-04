const router = require('express').Router();

const { validateUserInfo } = require('../middlewares/validators/user-validator');

const {
  getUserInfo,
  updateUserInfo,
} = require('../controllers/users');

router.get('/me', getUserInfo);
router.patch('/me', validateUserInfo, updateUserInfo);

module.exports = router;
