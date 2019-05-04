const router = require("express").Router();
const externalSearchRoutes = require("./externalSearch");
const podcastsRoutes = require("./podcasts");
const episodesRoutes = require("./episodes");

// routes
router.use("/search", externalSearchRoutes);
router.use("/podcasts", podcastsRoutes);
router.use("/episodes", episodesRoutes);

module.exports = router;
