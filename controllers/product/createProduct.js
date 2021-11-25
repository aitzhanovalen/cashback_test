const ProductModel = require("../../models/product");


const product_example = {
    sku: "111445GA8",
        title: "Apple iPhone 12 Pro 128Gb синий",
        description: "- размер оперативной памяти: 6 ГБ\
        - технология nfc: да\
        - тип экрана: OLED, Super Retina XDR\
        - диагональ: 6.1 дюйм\
        - процессор: Apple A14 Bionic\
        - объем встроенной памяти: 128 ГБ\
        - емкость аккумулятора: 2775 мАч",
        category:"Smartphone",
        quantity: 99
}

module.exports = function createProduct(product) {
    console.log('creating product '+product.title)
    return ProductModel.create(product).then(doc => {
        return doc;
    });
}
