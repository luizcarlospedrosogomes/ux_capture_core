import {postData} from './server.js';


const require = (url) =>{
        var script = document.createElement("script");  // create a script DOM node
        script.src = url;  // set its src to the provided URL
        document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
    }

const screenShot = (url) => {
    html2canvas(document.body).then(function(canvas) {        
        const bodyTXT = document.body.innerHTML
        const bodyIMG = canvas.toDataURL('image/png')

        const data    = JSON.stringify({url: document.URL, screenshot:[{body:bodyTXT, img: bodyIMG, date: Date.now()}]})
        postData(url+"/screenshot", data)
    });
}


export {require, screenShot};