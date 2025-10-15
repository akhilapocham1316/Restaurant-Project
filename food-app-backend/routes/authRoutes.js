const {Router} = require("express")

const router = Router();

const { createUser, loginUser } = require("../controller/authController");

router.post("/signup", createUser);
router.post("/login", loginUser);

module.exports = router;
