const express = require("express");
const router = express.Router();

router.use("/ctlg", require("./ctlg"));
router.use("/change_cashback", require("./changeCashback"));
// router.use("/orders", require("./orders"));
// router.use("/analytics", require("./analytics"));
// router.use("/login", require("./login"));

module.exports = router;