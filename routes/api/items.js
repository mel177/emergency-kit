const router = require("express").Router();
const homelistController = require("../../controllers/homelistController");

// Matches with "/api/items"
router.route("/api/items")
  .get(homelistController.findAll)
  .post(homelistController.create);

// Matches with "/api/items/:id"
router
  .route("/:id")
  .get(homelistController.findById)
  .put(homelistController.update)
  .delete(homelistController.remove);

module.exports = router;
