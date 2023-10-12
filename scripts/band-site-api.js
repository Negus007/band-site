let commSec = [];
let showData = [];

const apiKey1 = "?api_key=c55b716b-1954-4c01-8751-5f9592a5cfb6";

class BandSiteAPI {
  constructor(apiKey) {
    (this.apiKey = apiKey),
      (this.baseURL = "https://project-1-api.herokuapp.com/");
  }
  async postComment(comment) {
    try {
      const response = await axios.postComment(
        `${this.baseURL}comments${this.apiKey}`,
        comment,
      );
      commSec = response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async getComment() {
    try {
      const response = await axios.get(`${this.baseURL}comments${this.apiKey}`);
      commSec = response.data;
      return commSec;
    } catch (error) {
      console.error(error);
    }
  }
  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseURL}showdates${this.apiKey}`,
      );
      showData = response.data;
      return showData;
    } catch (error) {
      console.error(error);
    }
  }
}

const backend = new BandSiteAPI(apiKey1);
