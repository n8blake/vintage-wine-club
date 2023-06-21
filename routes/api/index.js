const router = require("express").Router();
const passport = require("passport");
const withAdminRole = passport.authenticate("bearer");
// require routes files
const authRoutes = require("./auth");
const usersRoutes = require("./users");
const protectedUserRoutes = require("./protectedUserRoutes");

// use routes
router.use('/auth', authRoutes);
router.use("/users", usersRoutes);

// protected routes
router.use("/getUsers", withAdminRole, protectedUserRoutes);

// export
module.exports = router;