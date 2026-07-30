import{EventEmitter}from "events";

const button=new EventEmitter();


button.on("click",(name) => {
    console.log(`Button clicked by: ${name}`);
});


button.emit("click", "Alec")
button.emit("click", "Alice")
button.emit("click", "bobby")
button.emit("click")