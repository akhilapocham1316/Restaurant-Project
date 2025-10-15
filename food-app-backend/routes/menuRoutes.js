const express = require("express");
const router = express.Router();

const MenuControllers = require("../controller/MenuController");

router.get("/", MenuControllers.getData);
router.get("/:id", MenuControllers.getSingleData);
router.delete("/:id", MenuControllers.deleteData); 

module.exports = router;
