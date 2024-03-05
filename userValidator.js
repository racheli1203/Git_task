
class UserValidator {
    static validateUserData(req, res, next) {
        const { name, phone, email } = req.body;


        if (!name || !phone || !email) {
            return res.status(400).send('All fields are required');
        }

        if (!UserValidator.isValidEmail(email)) {
            return res.status(400).send('Invalid email format');
        }

        if (name.length < 2) {
            res.send('Name must be at least two characters long').status(400);
        }

        if (phone.length !== 10 || isNaN(parseInt(phone))) {
            res.send('Phone number must be 10 digits').status(400);

        }
        next();
    }
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

module.exports = UserValidator;