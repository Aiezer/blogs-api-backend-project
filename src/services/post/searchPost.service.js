const Sequelize = require('sequelize');
const { BlogPost, Category, User } = require('../../database/models');

const searchPost = async (q) => {
  const { Op } = Sequelize;
  console.log('testando o search', q);

  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${q}%` } },
        { content: { [Op.like]: `%${q}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories' },
    ],
  });
  return posts || [];
};

module.exports = { searchPost };
