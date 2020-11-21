import Clickstream from "./Clickstream.js";

const clickstream = new Clickstream("http://localhost:9000/api", 10);

clickstream.track();
//clickstream.live();

//window.onbeforeunload = () => clickstream.post();
window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "\o/";
  
    (e || window.event).returnValue = confirmationMessage; 
    clickstream.post()//Gecko + IE
   
  });


console.log(document.URL)