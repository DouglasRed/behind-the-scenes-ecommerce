// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category",
});
// Categories have many Products
Category.belongsToMany(Product, {
  foreignKey: "category",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: "product_tag",
  foreignKey: "product",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: "product_tag",
  foreignKey: "product",
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
