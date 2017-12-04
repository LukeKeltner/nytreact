import axios from "axios";

export default {

  getArticles: function()
  {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3f773f6859af4b2c8f946c3173456726&q=trump")
  }

};
