const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email:{
        type:String,
        unique:true
    } 
},
{timestamps:true}
);

const UserModel = mongoose.model('User', userSchema);

class User {
    static async getUserById(userId) {
        try {
            const user = await UserModel.findById(userId);
            return user;
        } catch (error) {
            throw new Error('Error fetching user by ID');
        }
    }
    
    static async createUser(userData) {
        try {
            const newUser = await UserModel.create(userData);
            return newUser;
        } catch (error) {
            throw new Error('Error creating user');
        }
    }
    
    static async putUser(userId, putUserData) {
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
    
    static async delete(userId) {
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
}

module.exports = User;
