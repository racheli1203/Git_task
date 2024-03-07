const UserModel = require('../models/user_service');
const testDeleteUser = require('../controllers/userController').deleteUser;

jest.mock('../models/user_service');

describe('deleteUser function', () => {
  it('should return success message when deleteUser function is called successfully', async () => {
    const userId = '123';
    UserModel.deleteUser.mockResolvedValue();

    const req = { params: { userId } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await testDeleteUser(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith("message: 'User deleted successfully'");
  });

  it('should return error message when deleteUser function fails', async () => {
    const userId = '123';
    const mockError = new Error('Failed to delete user');
    UserModel.deleteUser.mockRejectedValue(mockError);

    const req = { params: { userId } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await testDeleteUser(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith("error: 'Failed to delete user'");
  });
});
