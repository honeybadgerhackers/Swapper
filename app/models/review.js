module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    comment: DataTypes.STRING,  // the comment submitted as a review
    rating: DataTypes.BIGINT,   // a rating scale of 1 - 5, 5 being the best
    id_reviewer: DataTypes.BIGINT,  // the id of the user giving the review
    id_reviewee: DataTypes.BIGINT,  // the id of the user being reviewed
  });

  Review.associate = (models) => {
    Review.belongsTo(models.User, {
      foreignKey: 'id_reviewee',
    });

    Review.belongsTo(models.User, {
      foreignKey: 'id_reviewer',
    });
  };
  return Review;
};
