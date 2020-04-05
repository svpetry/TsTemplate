const ctx: Worker = self as any;

ctx.onmessage = (ev): void => {
    let message: string = ev.data;
    
    console.log("in webworker");

    ctx.postMessage(message + " :-)");
};
