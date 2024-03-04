
class UserValidator {
    static validateUserData(req, res, next) {
        const { name, phone } = req.body;

        if (name.length < 2) {
            return res.status(400).json({ error: 'Name must be at least two characters long' });
        }

        if (phone.length !== 10 || isNaN(parseInt(phone))) {
            return res.status(400).json({ error: 'Phone number must be 10 digits' });
        }

        next();
    }

 
}

module.exports = UserValidator;


