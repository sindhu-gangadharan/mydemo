
const productData = require('../mockdata/ProductData.json');


/**
 * Find product by ID
 * Returns a single product
 *
 * productId Integer ID of product to return
 * returns Object
 * */
exports.getProductById = function (productId) {
  return new Promise(((resolve, reject) => {
    const productById = {};
    const productDataById = productData.find((product) => product.product_id === productId);
    productById['application/json'] = {
      productDataById,
    };
    if (Object.keys(productById).length > 0) {
      resolve(productById[Object.keys(productById)[0]]);
    } else {
      reject('Product not found');
    }
  }));
};


/**
 * Retrieve all the products for the selected ids
 *
 * objProductIdsAttributes Object List of product ids and attributes
 * returns Object
 * */
exports.getProductByIds = function (objProductIdsAttributes) {
  return new Promise(((resolve, reject) => {
    // Product ids to be searched
    const { productIds } = objProductIdsAttributes;
    // Product attributes to be added in response
    const { productAttributes } = objProductIdsAttributes;
    const productsForIds = [];
    const productByIds = {};
    // Fetching product for each id and push to array
    productIds.forEach((productId) => {
      if (productData.find((product) => product.product_id === productId)) {
        const keysOfProudctData = Object.keys(productData.find((product) => product.product_id === productId));
        // Identifying the attributes to be removed from the response
        productAttributes.forEach((productAttribute) => {
          const indexToBeRemoved = keysOfProudctData.indexOf(productAttribute);
          delete keysOfProudctData[indexToBeRemoved];
        });
        const productDataForId = productData.find((product) => product.product_id === productId);
        keysOfProudctData.forEach((key) => {
          delete productDataForId[key];
        });
        // Pushing the final array to response.
        productsForIds.push(productData.find((product) => product.product_id === productId));
      }
    });
    productByIds['application/json'] = productsForIds;
    if (Object.keys(productByIds).length > 0) {
      resolve(productByIds[Object.keys(productByIds)[0]]);
    } else {
      reject('Product not found');
    }
  }));
};


/**
 * Find Product by Name
 * Returns a single product
 *
 * productName String Name of the product to return
 * returns Object
 * */
exports.getProductByName = function (productName) {
  return new Promise(((resolve, reject) => {
    const productByName = {};
    const productDataByName = productData.find((product) => product.product_name === productName);
    productByName['application/json'] = { productDataByName };
    if (Object.keys(productByName).length > 0) {
      resolve(productByName[Object.keys(productByName)[0]]);
    } else {
      reject('Product not found');
    }
  }));
};
