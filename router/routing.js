
const express = require('express');
const UserController = require('../controllers/userController');
const UserValidator = require('../validators/userValidator');
const router = express.Router();

router.post('/', UserValidator.validateUserData, UserController.createUser);
router.put('/:userId', UserValidator.validateUserData, UserController.putUser);
router.get('/:userId', UserController.getUserById);
router.get('/', UserController.getAllUsers);
router.delete('/:userId', UserController.deleteUser);

module.exports = router;

