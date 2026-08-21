import http from "http";

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content type":"text/html"});

    res.write("<h2>Hello Cient</h2>")
    res.end();
});

server.listen(4444,()=>{
    console.log("server is running")
})