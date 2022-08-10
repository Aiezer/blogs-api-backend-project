const { StatusCodes } = require('http-status-codes');
const { createUser } = require('../services/user.service');

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

module.exports = { createUserController };