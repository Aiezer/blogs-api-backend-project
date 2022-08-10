const createPostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  });

  return PostCategory;
};

module.exports = createPostCategory;
