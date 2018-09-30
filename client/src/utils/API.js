import axios from "axios";

export default {
  // Gets all items
  getHomelists: function() {
    return axios.get("/api/homelists");
  },
  // Gets the book with the given id
  gethomelists: function(id) {
    return axios.get("/api/homelists/" + id);
  },
  // Deletes the book with the given id
  deletehomelists: function(id) {
    return axios.delete("/api/homelists/" + id);
  },
  // Saves a book to the database
  savehomelists: function(homelists) {
    return axios.post("/api/homelists", homelists);
  }
};
