module.exports = (sequelize, DataTypes) => {
    const BlogPosts = sequelize.define('BlogPosts', {
      id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
      underscored: true,
      tableName: 'blog_posts',
      createdAt: 'published',
      updatedAt: 'updated',
    });
  
    BlogPosts.associate = (models) => {
      BlogPosts.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'users'
      })
    };

    return BlogPosts;
  };