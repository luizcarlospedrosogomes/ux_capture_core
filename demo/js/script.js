import {require, screenShot} from "./modules/util.js";
import Clickstream from "./Clickstream.js";

require("/js/modules/html2canvas.min.js");

const urlAPI = "http://localhost:9000/api"

const clickstream = new Clickstream(urlAPI, 10);

clickstream.track();

window.onbeforeunload = () => clickstream.post();

window.addEventListener("beforeunload", function (e) {
    clickstream.post()//Gecko + IE
});

window.onload = function(){
  screenShot()
}
document.addEventListener("DOMContentLoaded", function(){
 // screenShot()
});

window.addEventListener("load", function(){
  screenShot(urlAPI)
});
