import axios from "axios";

export default {
  // Gets all episodes
  getEpisodes: function() {
    return axios.get("/api/episodes");
  },
  // Gets the episode with the given id
  getEpisode: function(id) {
    return axios.get("/api/episodes/" + id);
  },
  // Deletes the episode with the given id
  deleteEpisode: function(id) {
    return axios.delete("/api/episodes/" + id);
  },
  // Saves a episode to the database
  saveEpisode: function(episodeData) {
    return axios.post("/api/episodes", episodeData);
  }
};
