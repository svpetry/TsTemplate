import MyWorker = require("worker-loader?name=js/[name].js!./worker");
import { hello } from './hello-world';

let worker = new MyWorker();

console.log(hello());

worker.onmessage = (ev: MessageEvent): void => {
    console.log(ev.data);
    worker.terminate();
};

worker.postMessage("message to the webworker");
