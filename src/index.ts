import { hello } from "./hello-world";

const worker = new Worker(new URL('worker', import.meta.url));

console.log(hello());

worker.onmessage = (ev: MessageEvent): void => {
    console.log(ev.data);
    worker.terminate();
};

worker.postMessage("message to the webworker");
