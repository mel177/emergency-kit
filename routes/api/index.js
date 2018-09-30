const router = require("express").Router();
const itemRoutes = require("./items");

// Item routes
router.route("/")
  .get(homelistsController.findAll)
  .post(homelistsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(homelistsController.findById)
  .put(homelistsController.update)
  .delete(homelistsController.remove);


module.exports = router;
