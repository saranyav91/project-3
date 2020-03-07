import axios from "axios";

export default {
    getUser: function() {
        return axios.get("/api/users");
    },
    saveBook: function(userData) {
        console.log("in save book");
        return axios.post("/api/users", userData);
    }
};