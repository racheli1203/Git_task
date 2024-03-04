

const express = require('express');
const UserController = require('./userController');
const UserValidator = require('./validateUser');
const router = express.Router();

router.use(express.json());

router.post('/', UserValidator.validateUserData, UserController.createUserController);
router.put('/:userId', UserValidator.validateUserData, UserController.putUserController);

router.get('/:userId', UserController.getUserByIdController);
router.delete('/:userId', UserController.deleteUserController);

module.exports = router;


// const express = require('express');
// const UserController = require('./userController');
// //const  validateUserData  = require('./validateUser')
// const router = express.Router();
// //const UserValidator=require('./validateUser')
// //const { validateUserData } = require('./middleware');

// const UserValidator = require('./validateUser');
// // Define routes
// router.get('/:userId',UserController.getUserByIdController);
// router.post('/' , UserValidator.createUserController);
// router.put('/:userId',UserValidator , UserController.putUserController);
// router.delete('/:userId' , UserController.deleteUserController);

// module.exports = router;