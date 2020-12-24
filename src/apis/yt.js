import axios from "axios";

const KEY = "AIzaSyAw56tU0N0PazmtvY6MGA5bwFs2SqqbvX4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
