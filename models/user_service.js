const UserModel = require("./user_models")

async function getAllUsers() {
    try {
        const users = await UserModel.find();
        return users;
    } catch (error) {
        throw new Error("Failed to fetch users from database");
    }
}


async function getUserById(userId) {
    try {
        const user = await UserModel.findById(userId);
        return user;
    } catch (error) {
        throw new Error('Error fetching user by ID');
    }
}

async function createUser(userData) {
    try {
        const newUser = await UserModel.create(userData);
        return newUser;
    } catch (error) {
        throw new Error('Error creating user');
    }
}

async function putUser(userId, putUserData) {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(userId, putUserData, { new: true });
        if (!updatedUser) {
            throw new Error('User not found');
        }
        return updatedUser;
    } catch (error) {
        throw new Error('Error updating user');
    }
}

async function deleteUser(userId) {
    try {
        const deletionResult = await UserModel.findByIdAndDelete(userId);
        if (!deletionResult) {
            throw new Error('User not found');
        }
        return 'The deletion was successful';
    } catch (error) {
        throw new Error('Error deleting user');
    }
}


module.exports = { getAllUsers, createUser, putUser, deleteUser, getUserById };