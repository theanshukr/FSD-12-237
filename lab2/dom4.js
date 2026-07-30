import{EventEmitter}from "events";

const form=new EventEmitter();

form.on("submit",(name,pass)=>{
    console.log(`Form submitted`);
    console.log(`USER: ${name}`);
    console.log(`PASSWORD: ${pass}`);
});

form.emit("submit", "Alec😂", "alec1234");
