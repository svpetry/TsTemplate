// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ctx: Worker = self as any;

ctx.onmessage = (ev): void => {
    const message: string = ev.data;
    
    console.log("in webworker");

    ctx.postMessage(message + " :-)");
};
