/**
 * Created by fws on 2018/1/21.
 */

const express = require("express");
let home = require("./home");
let router = express.Router();
home(router);
module.exports = router;