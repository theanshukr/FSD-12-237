import{EventEmitter} from "events";

class DomClass extends EventEmitter{
    addeventListener(eventName,callback){
        this.on(eventName,callback);
    }
    removeEventListener(eventName,callback){
        this.removeListener(eventName,callback);
    }
    dispatchEvent(eventName,eventData={}){
        const event={
            type:eventName,
            timestamp:new Date(),
            ...eventData
        };
        this.emit(eventName,event);

    }
}

const button=new DomClass();
const handleClick=(event)=>{
    console.log(`Button clicked type: ${event.type} at ${event.timestamp}`);
};

button.addeventListener("click", handleClick);
button.dispatchEvent("click",{target:"submitbtn"});

button.removeEventListener("click", handleClick);
button.dispatchEvent("click",{target:"resetbtn"});

