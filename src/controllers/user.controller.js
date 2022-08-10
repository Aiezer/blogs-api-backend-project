const { StatusCodes } = require('http-status-codes');
const { createUser, getAllUsers, deleteAllUsers } = require('../services/user.service');

const createUserController = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;
        const result = await createUser({ displayName, email, password, image });
        console.log('result', result);
        return res.status(StatusCodes.CREATED).json(result);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};

const getAllUsersController = async (req, res) => {
    try {
        const result = await getAllUsers();
        return res.status(StatusCodes.OK).json(result);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};

const deleteAllUsersController = async (req, res) => {
    try {
        const result = await deleteAllUsers();
        return res.status(StatusCodes.OK).json(result);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};

module.exports = { createUserController, getAllUsersController, deleteAllUsersController };