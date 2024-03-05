
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
            return res.status(400).send('Name must be at least two characters long');
        }

        if (phone.length !== 10 || isNaN(parseInt(phone))) {
            return res.status(400).send('Phone number must be 10 digits');
        }

        next();
    }

    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

module.exports = UserValidator;
