import {EventEmitter} from "node:events";
const login=(name)=>{
    console.log(`Welcome ${name} logged in successfully`);
}
const start=()=>{
    console.log("Starting the application");
}
const working=(name)=>{
    console.log(`${name} add items to cart`);
}
const checkout=(name)=>{
    console.log(`${name} logged out`);

}
const task=new EventEmitter();
task.on('start',start)
task.on("greet", login);
task.emit("greet",'Alec')