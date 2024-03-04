

const express = require('express');
const UserController = require('./userController');
const UserValidator = require('./userValidator');
const router = express.Router();

// קבע את bodyParser לקריאת נתוני JSON
router.use(express.json());

// הוסף את המידלוואר עבור בדיקת הולידציה רק לבקשות מסוג POST ו-PUT
router.post('/', UserValidator.validateUserData, UserController.createUserController);
router.put('/:userId', UserValidator.validateUserData, UserController.putUserController);

// הוסף נתיבים נוספים לבקשות אחרות
router.get('/:userId', UserController.getUserByIdController);
router.delete('/:userId', UserController.deleteUserController);

module.exports = router;

