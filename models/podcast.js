const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const podcastSchema = new Schema({
  podcast_id: { type: String, required: true, unique: true, index: true },
  podcast_title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  description: { type: String, required: true },
  publisher: { type: String, required: true },
  latest_pub_date_ms: { type: Date, default: Date.now, required: true },
});

const Podcast = mongoose.model("Podcast", podcastSchema);

module.exports = Podcast;
