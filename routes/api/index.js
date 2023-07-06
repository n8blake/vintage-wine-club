const router = require("express").Router();
const passport = require("passport");
const withAdminRole = passport.authenticate("bearer");
// require routes files
const authRoutes = require("./auth");
const usersRoutes = require("./users");
const protectedUserRoutes = require("./protectedUserRoutes");
const rolesRoutes = require("./roles");
const winesRoutes = require("./wines");
const notesRoutes = require("./wineNotes");
// use routes
router.use('/auth', authRoutes);
router.use("/users", usersRoutes);
router.use("/wines", winesRoutes);
router.use("/wine_notes", notesRoutes);
// to protect routes, add withAdminRole 
// e.g. router.use("/getUsers", withAdminRole, protectedUsersRoutes);
router.use("/getUsers", protectedUserRoutes);
router.use("/roles", rolesRoutes);


// export
module.exports = router;