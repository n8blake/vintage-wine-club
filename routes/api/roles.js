const router = require("express").Router();
const rolesController = require("../../controllers/rolesController.js")

router.get("/", function(req, res){
    return rolesController.findAll(req, res);
})

router.route("/reset")
    .get(rolesController.reset)

router.route("/:id")
    .post(rolesController.create)
    .put(rolesController.update)
    .delete(rolesController.remove)

module.exports = router;