
function createUserController(req, res) {
    try {
        const userData = req.body; 
        const newUser = User.createUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function putUserController(req, res) {
    try {
        const userId = parseInt(req.params.userId); 
        const updatedUserData = req.body; 
        const updatedUser = User.putUser(userId, updatedUserData);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function deleteUserController(req, res) {
    try {
        const userId = parseInt(req.params.userId); 
        const deletionResult = User.delete(userId);
        res.status(200).json({ message: deletionResult });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
function getUserByIdController(req, res) {

    try {
        const userId = parseInt(req.params.userId); 
        const user = User.getUserById(userId);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports={createUserController,putUserController,getUserByIdController,deleteUserController}






