const { User } = require('../database/models/index');
const { createToken } = require('./jwt.service');

const createUser = async (user) => {
  const newUser = await User.create(user);
  const token = createToken(newUser);
  console.log('log do service', token);
    return {
        token,
    };
};

module.exports = { createUser };