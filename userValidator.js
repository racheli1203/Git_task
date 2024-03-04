
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

// // middleware.js

// function validateUserData(req, res, next) {
//     const userData = req.body;
//     const { id, name, phone, email } = userData;

//     // Check if all fields exist
//     if (!id || !name || !phone || !email) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     // Check name length
//     if (name.length < 2) {
//         return res.status(400).json({ error: 'Name must be at least two characters long' });
//     }

//     // Check email format
//     if (!email.includes('@') || email.includes(' ')) {
//         return res.status(400).json({ error: 'Invalid email format' });
//     }

//     // Check phone number format
//     if (phone.length !== 10 || isNaN(parseInt(phone))) {
//         return res.status(400).json({ error: 'Phone number must be 10 digits' });
//     }

//     // If all validations pass, proceed to the next middleware or route handler
//     next();
// }

// module.exports = { validateUserData };
