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
<<<<<<< HEAD
    
    constructor(id, name, phone, email) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    static users = [{ id: 1, name: "racheli", phone: "852", email: "741@gmail.com" }, { id: 2, name: "yael", phone: "852", email: "741@gmail.com" }];
    

    static getUserById(userId) {
        const user = this.users.find(user => user.id === userId);
        return user;
    }
    
    static createUser(userData) {
        const { id, name, phone, email } = userData;
        const newUser = new User(id, name, phone, email);
        this.users.push(newUser);
        return newUser;
    }
    
    static putUser(userId, putUserData) {
        const userToUpdate = this.getUserById(userId);
        if (!userToUpdate) {
            throw new Error('User not found');
=======
    static async getUserById(userId) {
        try {
            const user = await UserModel.findById(userId);
            return user;
        } catch (error) {
            throw new Error('Error fetching user by ID');
>>>>>>> 521f8b8a96e40f45f9ea4e3b1177ed1417e7c827
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
