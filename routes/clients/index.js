const express = require("express");
const router = express.Router();

// router.use("/ctlg", require("./ctlg"));
router.use("/buy", require("./buy"));
// router.use("/login", require("./login"));

module.exports = router;
