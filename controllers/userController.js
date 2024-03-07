const UserModel = require('../models/user_service');

async function getAllUsers(req, res) {
    try {
        const users = await UserModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error("Failed to fetch users:", error);
        res.status(500).json({ error: "Failed to fetch users" });
    }
}

async function createUser(req, res) {
    try {
        const userData = req.body;
        const newUser = await UserModel.createUser(userData);
        res.status(200).send(newUser);
    } catch (error) {
        res.status(404).send("error: 'Failed to create user'");
    }
}

async function putUser(req, res) {
    try {
        const userId = req.params.userId;
        const updatedUserData = req.body;
        const updatedUser = await UserModel.putUser(userId, updatedUserData);
        if (!updatedUser) {
            return res.status(404).send("error: 'User not found'");
        }
        return res.status(200).send(updatedUser);
    } catch (error) {
        console.error("Failed to update user:", error);
        return res.status(500).send("error: 'Failed to update user'");
    }
}


async function deleteUser(req, res) {
    try {
        const userId = req.params.userId;
        await UserModel.deleteUser(userId);
        res.status(200).send("message: 'User deleted successfully'");
    } catch (error) {
        res.status(500).send("error: 'Failed to delete user'");
    }
}

async function getUserById(req, res) {
    try {
        const userId = req.params.userId;
        const user = await UserModel.getUserById(userId);
        if (!user) {
            res.status(404).send("error: 'User not found'");
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send("error: 'Failed to fetch user'");
    }
}

module.exports = {
    getAllUsers,
    createUser,
    putUser,
    getUserById,
    deleteUser
};
