const {createMerchant,addProductToMerchant} = require('../controllers/merchant')
const {createProduct,addMerchantToProduct,addPriceToProduct} = require('../controllers/product')

async function fillDbProductsAndMerchants(){
    var m1 = await createMerchant({
        name: "Digital Market"
    });
    var m2 = await createMerchant({
        name: "SuperPrice"
    });
    var m3 = await createMerchant({
        name: "Ditell"
    });
      
    var prod1 = await createProduct({
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
        quantity: 99,
        // price:578900,
        // cashback_percent: 1,
        // cashback:5789,
        // imgs: ['img1.jpg','img2.jpg']
    });
    
    var prod2 = await createProduct({
        sku: "112445GB3",
        title: "Samsung Galaxy A52 4/128Gb черный",
        description: "- размер оперативной памяти: 4 ГБ\
        - технология nfc: да\
        - тип экрана: Super AMOLED, сенсорный, Corning Gorilla Glass 5\
        - диагональ: 6.5 дюйм\
        - процессор: Qualcomm Snapdragon 720G\
        - объем встроенной памяти: 128 ГБ\
        - емкость аккумулятора: 4500 мАч",
        category:"Smartphone",
        quantity: 99,
        // price:146200,
        // cashback_percent: 1.5,
        // cashback:146.2,
        // imgs: ['img3.jpg','img4.jpg']
    });
    
    var prod3 = await createProduct({
        sku: "122345FD2",
        title: "Xiaomi Redmi 9A 2/32Gb серый",
        description: "- размер оперативной памяти: 2 ГБ\
        - технология nfc: нет\
        - тип экрана: сенсорный, мультитач, IPS\
        - диагональ: 6.53 дюйм\
        - процессор: MediaTek Helio G25\
        - объем встроенной памяти: 32 ГБ\
        - емкость аккумулятора: 5000 мАч",
        category:"Smartphone",
        quantity: 99,
        // price:55000,
        // cashback_percent: 1,
        // cashback:5,
        // imgs: ['img3.jpg','img4.jpg']
    });

    var prod4 = await createProduct({
        sku: "112345FS0",
        title: "Apple iPhone 11 128Gb Slim Box зеленый",
        description: "- размер оперативной памяти: 4 ГБ\
        - технология nfc: да\
        - тип экрана: цветной IPS, Liquid Retina HD\
        - диагональ: 6.1 дюйм\
        - процессор: Apple A13 Bionic\
        - объем встроенной памяти: 128 ГБ\
        - емкость аккумулятора: 3110 мАч",
        category:"Smartphone",
        quantity: 99,
        // price:367400,
        // cashback_percent: 1,
        // cashback:5,
        // imgs: ['img3.jpg','img4.jpg']
    });

    var prod5 = await createProduct({
        sku: "112445FC6",
        title: "Apple AirPods with Charging Case белый",
        description: "- тип: гарнитура\
        - вид: внутриканальные\
        - подключение: беспроводное\
        - тип акустического оформления: открытые\
        - тип крепления: без крепления\
        - система активного шумоподавления: нет\
        - микрофон: да",
        category:"Headphones",
        quantity: 99,
        // price:64000,
        // cashback_percent: 1,
        // cashback:5,
        // imgs: ['img3.jpg','img4.jpg']
    });

    
    await addProductToMerchant(m1._id, prod1);
    await addProductToMerchant(m1._id, prod4);
    await addProductToMerchant(m1._id, prod5);

    await addProductToMerchant(m2._id, prod1);
    await addProductToMerchant(m2._id, prod2);
    await addProductToMerchant(m2._id, prod3);
    await addProductToMerchant(m2._id, prod4);

    await addProductToMerchant(m3._id, prod2);
    await addProductToMerchant(m3._id, prod5);


    await addMerchantToProduct(prod1._id, m1);
    await addMerchantToProduct(prod1._id, m2);

    await addMerchantToProduct(prod2._id, m2);
    await addMerchantToProduct(prod2._id, m3);

    await addMerchantToProduct(prod3._id, m2);

    await addMerchantToProduct(prod4._id, m1);
    await addMerchantToProduct(prod4._id, m2);

    await addMerchantToProduct(prod5._id, m1);
    await addMerchantToProduct(prod2._id, m3);
    console.log('adding prices')

    await addPriceToProduct(prod1._id,m1._id,10000,1)

}

module.exports = {fillDbProductsAndMerchants}