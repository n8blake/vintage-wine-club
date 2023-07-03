const router = require("express").Router();
const passport = require("passport");
const withAdminRole = passport.authenticate("bearer");
// require routes files
const authRoutes = require("./auth");
const usersRoutes = require("./users");
const protectedUserRoutes = require("./protectedUserRoutes");
const rolesRoutes = require("./roles");

// use routes
router.use('/auth', authRoutes);
router.use("/users", usersRoutes);
// to protect routes, add withAdminRole 
// e.g. router.use("/getUsers", withAdminRole, protectedUsersRoutes);
router.use("/getUsers", protectedUserRoutes);
router.use("/roles", rolesRoutes);


// export
module.exports = router;