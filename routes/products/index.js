const express = require("express");
const router = express.Router();

router.use("/ctlg", require("./catalog"));
router.use("/buy", require("./buy"));

module.exports = router;