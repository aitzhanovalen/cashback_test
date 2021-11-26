const express = require("express");
const router = express.Router();

router.use("/customer", require("./customer"));
router.use("/merchant", require("./merchants"));
router.use("/product", require("./products"));


module.exports = router;