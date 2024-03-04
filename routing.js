const express = require('express');
const UserController = require('./userController');
const router = express.Router();

// Define routes
router.get('/:userId',UserController.getUserByIdController);
router.post('/', UserController.createUserController);
router.put('/:userId', UserController.putUserController);
router.delete('/:userId', UserController.deleteUserController);

module.exports = router;