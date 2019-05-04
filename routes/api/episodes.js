const router = require("express").Router();
const episodesController = require("../../controllers/episodesController");

// Matches with "/api/episodes"
router.route("/")
  .get(episodesController.findAll)
  .post(episodesController.create);

// Matches with "/api/episodes/:id"
router
  .route("/:id")
  .get(episodesController.findById)
  .put(episodesController.update)
  .delete(episodesController.remove);

module.exports = router;
