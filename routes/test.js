const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    console.log('ok')
    res.status(200).send('ok')
});

module.exports = router;