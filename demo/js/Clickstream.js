import trackClickstream from "./modules/trackClickstream.js";



import { postData, getData } from "./modules/server.js";

export default class Clickstream {

  constructor(url, total) {
    this.url = url;
    this.total = total;
  }
  
  track() {
    this.clickstream = trackClickstream();
  }
  
  post() {    
    postData(this.url+"/click", this.clickstream);
  }
  
  async get() {
    return await getData(this.url, this.total);
  }

  async heatmap(max = 10) {
    this.data = await this.get();
    if (this.data.length) paintHeatmap(this.data.flat(), max);
  }

}
