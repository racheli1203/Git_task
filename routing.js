
const express = require('express');
const UserController = require('./userController');
const UserValidator = require('./userValidator');
const router = express.Router();


router.use(express.json());


router.post('/', UserValidator.validateUserData, UserController.createUserController);
router.put('/:userId', UserValidator.validateUserData, UserController.putUserController);


router.get('/:userId', UserController.getUserByIdController);
router.delete('/:userId', UserController.deleteUserController);

module.exports = router;

