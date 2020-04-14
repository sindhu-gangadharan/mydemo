const expect = require('chai').expect;
const ProductService = require('../../service/ProductService');

describe('Product service ', async function() {
    it('Should retrieve the product data with id as input', async function(){
        const output = await ProductService.getProductById(1);
        expect(output.productDataById.product_name).to.equal('Buzzshare');
    })
    it('Should retrieve the product data with name as input', async function(){
        const output = await ProductService.getProductByName('Lazz');
        expect(output.productDataByName.product_id).to.equal(2);
    })
})