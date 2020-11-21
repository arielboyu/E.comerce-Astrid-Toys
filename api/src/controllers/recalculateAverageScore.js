const { Product, Review } = require("../db.js");
const recalculateAverageScore = (productId) => {
  Review.count({ where: { productId: productId } }).then((count) => {
    Review.sum("score", { where: { productId: productId } }).then((sum) => {
      let averageScore = sum / count;
      Product.update(
        { averageScore: averageScore },
        { where: { id: productId } }
      ).then((r) => console.log(r));
    });
  });
};
module.exports = recalculateAverageScore;