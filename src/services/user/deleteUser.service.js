const { getById } = require('./user.service');

const deleteMyUser = async (id) => {
    const user = await getById(id);
    if (!user) {
        return {
        statusCode: 404,
        message: 'User not found',
        };
    }
    await user.destroy();
    return {
        statusCode: 204,
    };
};

module.exports = { deleteMyUser };