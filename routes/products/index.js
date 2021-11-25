const express = require("express");
const router = express.Router();

router.use("/ctlg", require("./catalog"));

module.exports = router;