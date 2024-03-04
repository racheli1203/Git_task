

class UserValidator {
    static validateUserData(req, res, next) {
        const { name, phone, email } = req.body;

    
        if (!name || !phone || !email) {
            return res.status(400).send('All fields are required');
        }

       
        if (!UserValidator.isValidEmail(email)) {
            return res.status(400).send('Invalid email format');
        }

        next();
    }

    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}


module.exports = UserValidator;


