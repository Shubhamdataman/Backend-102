const express = require("express");
const { signupcont } = require("../Controllers/signupcont");
const { logincont } = require("../Controllers/logincont");
const { getUser } = require("../Controllers/getUser");
const router = express.Router();

router.post("/signup", signupcont);
router.post("/login", logincont);
router.get("/getUser",getUser)

module.exports = router;
