const express = require("express");
const router = express.Router();

router.use("/ctlg", require("./ctlg"));
router.use("/create_cashback_percents", require("./createCashbackPercents"));
router.use("/show_cashback_percents", require("./showCashbackPercents"));
// router.use("/change_cashback", require("./changeCashback"));
router.use("/orders", require("./getOrders"));

module.exports = router;