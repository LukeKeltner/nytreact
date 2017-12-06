import axios from "axios";

export default {

  getArticles: function(topic, startYear, endYear)
  {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3f773f6859af4b2c8f946c3173456726&q="+topic+"&begin_date="+startYear+"0101$end_date="+endYear+"0101");
  },

  getSavedArticles: function()
  {
  	return axios.get("/api");
  },

  saveNewArticle: function(data)
  {
  	return axios.post("/api", data)
  },

  deleteArticle: function(data)
  {
  	return axios.delete("/api/"+data)
  }

};
