const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const podcastSchema = new Schema({
  id: { type: String, required: true, unique: true, index: true },
  title_original: { type: String, required: true },
  thumbnail: { type: String, required: true },
  description_original: { type: String, required: true },
  publisher_original: { type: String, required: true },
  latest_pub_date_ms: { type: Date, default: Date.now, required: true },
  listennotes_url: { type: String },
});

const Podcast = mongoose.model("Podcast", podcastSchema);

module.exports = Podcast;
