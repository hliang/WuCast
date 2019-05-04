const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const episodeSchema = new Schema({
  episode_id: { type: String, required: true, unique: true, index: true },
  episode_title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  description: { type: String, required: true },
  pub_date_ms: { type: Date, default: Date.now, required: true },
  podcast_title: { type: String, required: true },
  podcast_id: { type: String, required: true },
});

const Episode = mongoose.model("Episode", episodeSchema);

module.exports = Episode;
