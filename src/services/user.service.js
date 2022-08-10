const { User } = require('../database/models/index');
const { createToken } = require('./jwt.service');

const createUser = async (user) => {
  const newUser = await User.create(user);
  const token = createToken(newUser);
    return {
        token,
    };
};

const getAllUsers = async () => {
  const users = await User.findAll();
  console.log('users', users);
  return users;
};

const deleteAllUsers = async () => {
  const users = await User.destroy({ where: {} });
  return users;
};

module.exports = { createUser, getAllUsers, deleteAllUsers };