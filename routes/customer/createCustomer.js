const express = require("express");
const router = express.Router();
const {createCustomer} = require('../../controllers/customer')

router.post("/", async(req, res) => {
    //параметры в теле запроса: name,surname,iin,address
    let customer_info = req.body
    //TODO validation
    let new_customer = await createCustomer(customer_info)
    res.status(200).send(new_customer)
});

module.exports = router;