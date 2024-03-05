
const express = require('express');
const UserController = require('../controllers/userController');
const UserValidator = require('../validators/userValidator');
const router = express.Router();


router.use(express.json());


router.post('/', UserValidator.validateUserData, UserController.createUserController);
router.put('/:userId', UserValidator.validateUserData, UserController.putUserController);


router.get('/:userId', UserController.getUserByIdController);
router.delete('/:userId', UserController.deleteUserController);

module.exports = router;

