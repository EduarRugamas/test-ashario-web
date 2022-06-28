import { searchClient } from '../config/config.js';
import { data } from '../config/data.js';

let frame = document.getElementById("jane-menu");
frame.contentWindow.postMessage(data, "*");

// window.addEventListener("message", receiveMessage, false);
//
// function receiveMessage(event) {
//     let payload = event.data && event.data.payload;
//     let messageType = event.data && event.data.messageType;
//
//     if (messageType === "loadingEvent" && payload.name === "headlessAppLoaded") {
//         let frame = document.getElementById("jane-menu");
//         frame.contentWindow.postMessage(data, "*");
//     }
// }
