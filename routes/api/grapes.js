const router = require("express").Router();
const grapesController = require('../../controllers/grapesController');

router.get("/", function(req, res){
    return grapesController.find(req, res);
})

router.route("/:id")
    .get(grapesController.findById)
    .post(grapesController.create)
    .put(grapesController.update)
    .delete(grapesController.remove)

module.exports = router;