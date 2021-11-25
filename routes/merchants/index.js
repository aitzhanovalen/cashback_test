const express = require("express");
const router = express.Router();

router.use("/ctlg", require("./ctlg"));
router.use("/add_cashback", require("./addCashbackToProduct"));
// router.use("/orders", require("./orders"));
// router.use("/analytics", require("./analytics"));
// router.use("/login", require("./login"));

module.exports = router;