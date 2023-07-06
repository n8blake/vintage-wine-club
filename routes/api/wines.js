const router = require("express").Router();
const winesController = require("../../controllers/winesController.js")

router.get("/", function(req, res){
    return winesController.find(req, res);
})

router.route("/:id")
    .post(winesController.create)
    .put(winesController.update)
    .delete(winesController.remove)

module.exports = router;