module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    comment: DataTypes.STRING,  // the comment submitted as a review
    id_user: DataTypes.BIGINT,  // the id of the user being reviewed,
    rating: DataTypes.BIGINT,   // a rating scale of 1 - 5, 5 being the best
  });

  Review.associate = (models) => {
    Review.belongsTo(models.User, {
      foreignKey: 'id_user',
    });
  };
  return Review;
};
