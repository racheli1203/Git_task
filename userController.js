
function createUserController(req, res) {
    try {
        const userData = req.body; 
        const newUser = User.createUser(userData);
        res.send(newUser).status(200);
    } catch (error) {
        res.send('user not found').status(500);
    }
}

function putUserController(req, res) {
    try {
        const userId = parseInt(req.params.userId); 
        const updatedUserData = req.body; 
        const updatedUser = User.putUser(userId, updatedUserData);

       res.send(updatedUser).status(200);

    } catch (error) {
      res.send('user not found').status(500);
    }
}

function deleteUserController(req, res) {
    try {
        const userId = parseInt(req.params.userId);
        const deletionResult = User.delete(userId);
       res.send('Deleted successfully').status(200);

    } catch (error) {
       res.send('user not deleted').status(500);
    }
}
function getUserByIdController(req, res) {

    try {
        const userId = parseInt(req.params.userId);
        const user = User.getUserById(userId);
        if (!user) {
         res.send('user not found').status(404);

        } else {
        //    res.status(200).json(user);
        res.send(user).status(200);

        }
    } catch (error) {
       res.send('user not found').status(500);
    }
}
module.exports={createUserController,putUserController,getUserByIdController,deleteUserController}