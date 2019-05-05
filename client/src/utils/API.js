import axios from "axios";

export default {
  // search
  search: function(queryParams) {
    return axios.get("/api/search", {params: queryParams});
  },
  // Gets all saved podcasts
  getPodcasts: function() {
    return axios.get("/api/podcasts");
  },
  // Gets the podcast with the given id
  getPodcast: function(id) {
    return axios.get("/api/podcasts/" + id);
  },
  // Deletes the podcast with the given id
  deletePodcast: function(id) {
    return axios.delete("/api/podcasts/" + id);
  },
  // Saves a podcast to the database
  savePodcast: function(podcastData) {
    return axios.post("/api/podcasts", podcastData);
  },
  // Gets all saved episodes
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
