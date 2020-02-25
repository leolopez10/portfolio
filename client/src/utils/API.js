import axios from "axios";

export default {
  // Gets all books
  getBlogPosts: function() {
    return axios.get("/api/blogpost");
  },
  // Gets the book with the given id
  getBlogId: function(id) {
    return axios.get("/api/blogpost/" + id);
  },
  // Deletes the book with the given id
  deleteBlogPost: function(id) {
    return axios.delete("/api/blogpost/" + id);
  },
  // Saves a book to the database
  saveBlogPost: function(postData) {
    return axios.post("/api/blogpost", postData);
  }
};
