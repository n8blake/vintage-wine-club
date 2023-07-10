const router = require("express").Router();
const wineNotesController = require("../../controllers/wineNotesController");
const wineNotesCategoryController = require('../../controllers/wineNoteCategoriesController');

router.get("/", function(req, res){
    return wineNotesController.find(req, res);
})

router.route("/categories")
    .get(wineNotesCategoryController.find)

router.route("/categories/:id")
    .post(wineNotesCategoryController.create)
    .put(wineNotesCategoryController.update)
    .delete(wineNotesCategoryController.remove)

router.route("/:id")
    .get(wineNotesController.findById)
    .post(wineNotesController.create)
    .put(wineNotesController.update)
    .delete(wineNotesController.remove)

module.exports = router;