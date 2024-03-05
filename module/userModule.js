
class User {
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
        }
        userToUpdate.id = putUserData.id;
        userToUpdate.name = putUserData.name;
        userToUpdate.phone = putUserData.phone;
        userToUpdate.email = putUserData.email;
        return userToUpdate;
    }
    
    
    static delete(userId) {
        const userToDelete = this.getUserById(userId);
    
        if (!userToDelete) {
            throw new Error('User not found');
        }
        const index = this.users.indexOf(userToDelete);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
        return `The deletion was successful`;
    }
    
}
module.exports = User;



