const UserModel = require('../models/user_service');
const testPutUser = require('../controllers/userController').putUser;

jest.mock('../models/user_service');

describe('putUser function', () => {
  it('should return updated user when putUser function is called successfully', async () => {
    const userId = '123';
    const updatedUserData = { name: 'Updated User' , email: 'test@example.com',phone:'0527698888'};
    const updatedUser = { id: userId, ...updatedUserData };
    UserModel.putUser.mockResolvedValue(updatedUser);

    const req = { params: { userId }, body: updatedUserData };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await testPutUser(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(updatedUser);
  });

  it('should return error message when user is not found', async () => {
    const userId = '123';
    const updatedUserData = { name: 'Updated User', email: 'test@example.com',phone:'0527698888' };
    UserModel.putUser.mockResolvedValue(null);

    const req = { params: { userId }, body: updatedUserData };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await testPutUser(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith("error: 'User not found'");
  });

  it('should return error message when putUser function fails', async () => {
    const userId = '123';
    const updatedUserData = { name: 'Updated User' , email: 'test@example.com',phone:'0527698888'};
    const mockError = new Error('Failed to update user');
    UserModel.putUser.mockRejectedValue(mockError);

    const req = { params: { userId }, body: updatedUserData };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await testPutUser(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith("error: 'Failed to update user'");
  });
});
  