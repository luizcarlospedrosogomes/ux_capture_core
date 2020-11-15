import trackClickstream from "./modules/trackClickstream.js";



import { postData, getData } from "./modules/server.js";

export default class Clickstream {
  constructor(url, total) {
    this.url = url;
    this.total = total;
  }
  track() {
    console.log("track")
    console.log(trackClickstream())
    this.clickstream = trackClickstream();
  }
  post() {
    console.log(this.clickstream)
    postData(this.url+"/click", this.clickstream);
  }
  async get() {
    return await getData(this.url, this.total);
  }
  /*async mouse() {
    this.data = await this.get();
    if (this.data.length) this.data.forEach(paintMouse);
  }*/
  async heatmap(max = 10) {
    this.data = await this.get();
    if (this.data.length) paintHeatmap(this.data.flat(), max);
  }
  live(max = 5) {
    paintLive(this.clickstream, max);
  }
}
