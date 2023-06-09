const { StatusCodes } = require('http-status-codes');
const {
  createUser,
  getAllUsers,
  getById,
} = require('../services/user/user.service');
const { deleteMyUser } = require('../services/user/deleteUser.service');

const createUserController = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const result = await createUser({ displayName, email, password, image });
    return res.status(StatusCodes.CREATED).json({ ...result });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

const getAllUsersController = async (req, res) => {
  try {
    const result = await getAllUsers();
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

const getByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getById(id);
    if (!result) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'User does not exist' });
    }
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

const deleteMyUserController = async (req, res) => {
  try {
    const { id } = req.user;
    await deleteMyUser(id);
    return res.status(StatusCodes.NO_CONTENT).json();
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

module.exports = {
  createUserController,
  getAllUsersController,
  getByIdController,
  deleteMyUserController,
};
