const { Router } = require("express");
const { user, userId } = require("../controllers/user");
const checkToken = require("../middleware/isAuthenticated");
const userRouter = new Router();

userRouter.get("/", user);

userRouter.use(checkToken);

userRouter.get("/:user", userId);

module.exports = userRouter;
