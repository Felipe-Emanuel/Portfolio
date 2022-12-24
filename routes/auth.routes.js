const { Router } = require("express");
const { register, login, recoveryMail, recovery } = require("../controllers/auth");

const authRoutes = new Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post("/forgotpassword", recoveryMail)
authRoutes.post("/resetpassword", recovery)

module.exports = authRoutes;
