
// userValidator.js

class UserValidator {
    static validateUserData(req, res, next) {
        const { name, phone, email } = req.body;

        // בדיקה שכל השדות קיימים
        if (!name || !phone || !email) {
            return res.status(400).send('All fields are required');
        }

        // בדיקה שהאימייל אינו מכיל רווחים וכי קיים תו @
        if (!UserValidator.isValidEmail(email)) {
            return res.status(400).send('Invalid email format');
        }

        // אם התקינות עברה בהצלחה, המשך לבצע את הנתיב
        next();
    }

    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

module.exports = UserValidator;
