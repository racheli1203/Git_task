class UserValidator {
    static validateUserData(req, res, next) {
        const { name, phone, email } = req.body;

    
    if (name.length < 2) {
       res.send('Name must be at least two characters long').status(400);
    }



    // Check phone number format
    if (phone.length !== 10 || isNaN(parseInt(phone))) {
        res.send('Phone number must be 10 digits').status(400);

    }
}
}

module.exports = UserValidator;