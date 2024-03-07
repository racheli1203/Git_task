const UserModel = require('../models/user_service');
const testGetUserById = require('../controllers/userController').getUserById;

jest.mock('../models/user_service');

describe('getUserById function', () => {
  it('should return user when getUserById function is called successfully', async () => {
    const userId = '123';
    const user = {
      id: userId,
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890'
    };
    UserModel.getUserById.mockResolvedValue(user);

    const req = { params: { userId } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await testGetUserById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(user);
  });

  it('should return error message when user is not found', async () => {
    const userId = '123';
    UserModel.getUserById.mockResolvedValue(null);

    const req = { params: { userId } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await testGetUserById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith("error: 'User not found'");
  });

  it('should return error message when getUserById function fails', async () => {
    const userId = '123';
    const mockError = new Error('Failed to fetch user');
    UserModel.getUserById.mockRejectedValue(mockError);

    const req = { params: { userId } };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await testGetUserById(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith("error: 'Failed to fetch user'");
  });
});
