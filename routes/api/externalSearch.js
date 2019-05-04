const axios = require("axios");
const router = require("express").Router();

// Matches with "/api/search"
router.route("/")
  .get( (req, res) => {
    axios
    .get("https://listen-api.listennotes.com/api/v2/search", { params: req.query, headers: {"X-ListenAPI-Key": process.env.ListenAPI} })
    .then(({ data: { results } }) => res.json(results))
    // .then( results => {console.log("-----2000000-----"); res.send(results.data)})
    .catch(err => res.status(422).json(err));
  });

module.exports = router;
