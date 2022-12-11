const { Router } = require("express");
const authRoutes = require("./auth.routes");
const userRouter = require("./user.routes");

const router = Router();

router.use("/user", userRouter);
router.use("/auth", authRoutes);

module.exports = router;
