import http from 'http'

const server = http.createServer();

const port=3000;

server.on('request',(req,res)=>{
    res.write("hello from server");
    res.end();
});

server.listen(port,()=>{
    console.log("server is running")
});
