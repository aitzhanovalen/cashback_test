const express = require("express");
const router = express.Router();

router.use("/create_customer", require("./createCustomer"));

module.exports = router;
