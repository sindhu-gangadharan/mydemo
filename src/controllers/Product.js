
const utils = require('../utils/writer.js');
const Product = require('../service/ProductService');

module.exports.getProductById = function getProductById(req, res, next, productId) {
  Product.getProductById(productId)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.getProductByIds = function getProductByIds(req, res, next, body) {
  console.log('body', body);
  Product.getProductByIds(body)
    .then((response) => {
      console.log('response');
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.getProductByName = function getProductByName(req, res, next, productName) {
  Product.getProductByName(productName)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};
