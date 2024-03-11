const UserModel = require('../models/user_service');
const  testGetAllUsers  = require('../controllers/userController').getAllUsers;

jest.mock('../models/user_service');

describe('getAllUsers function', () => {
    it('should return users when testGetAllUsers function is called successfully', async () => {
        const mockUsers = [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }];
        UserModel.getAllUsers.mockResolvedValue(mockUsers);

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await testGetAllUsers(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockUsers);
    });

    it('should return error message when testGetAllUsers function fails', async () => {
        const mockError = new Error('Failed to fetch users');
        UserModel.getAllUsers.mockRejectedValue(mockError);

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await testGetAllUsers(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Failed to fetch users' });
    });
});
