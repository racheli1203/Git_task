const User = require('../module/userModule');

async function createUser(req, res) {
    try {
        const userData = req.body;
        const newUser = await User.createUser(userData);
        res.send(newUser).status(200);
    } catch (error) {
          res.send("error: 'Failed to create user'").status(404)
      }
}

async function putUser(req, res) {
    try {
        const userId = req.params.userId;
        const updatedUserData = req.body;
        const updatedUser = await User.putUser(userId, updatedUserData);
        if (!updatedUser) {
              res.send(" error: 'User not found' ").status(404)
          }
        res.send(updatedUser).status(200)
    } catch (error) {
        res.send("error: 'Failed to update user' ").status(500)
    }
}

async function deleteUser(req, res) {
    try {
        const userId = req.params.userId;
        await User.delete(userId);
        res.send("message: 'User deleted successfully'").status(200)
    } catch (error) {
        res.send("error: 'Failed to delete user'").status(500)
    }
}

async function getUserById(req, res) {
    try {
        const userId = req.params.userId;
        const user = await User.getUserById(userId);
        if (!user) {
          res.send(" error: 'User not found'").status(404)
          }
           res.send(user).status(200)
        } 
    catch (error) {
     res.send("error: 'Failed to fetch user' ").status(500)
    }
}

module.exports = {
    createUser,
    putUser,
    getUserById,
    deleteUser
};
