const UserModel = require('../models/user_service');
const  testCreateUser  = require('../controllers/userController').createUser;

jest.mock('../models/user_service');

describe('createUser function', () => {
  it('should create a new user when createUser function is called successfully', async () => {
    const userData = { name: 'Test User', email: 'test@example.com',phone:'0527698888' };
    const newUser = { id: 1, ...userData };
    UserModel.createUser.mockResolvedValue(newUser);
    const req = { body: userData };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    await testCreateUser(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(newUser);
  });

  it('should return an error message when createUser function fails', async () => {
    const mockError = new Error('Failed to create user');
    UserModel.createUser.mockRejectedValue(mockError);
    const req = { body: {} };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    await testCreateUser(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith("error: 'Failed to create user'");
  });
});
