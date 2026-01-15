const http = require("http");
const fs = require('fs');

const PORT = 8080;

const handleRequest = (req, res) => {

    let fileName = '';

    switch(req.url){
        case '/home':
            fileName = 'index.html';
            break;

        case '/pricing':
            fileName = 'pricing.html';
            break;

        case '/blog':
            fileName = 'blog.html';
            break;

        default: 
            fileName = '404.html'
            break;
        }
        
    fs.readFile(fileName, (err,result)=>{
        if(!err){
            res.end(result);
        }
    })
};

const server = http.createServer(handleRequest);

server.listen(PORT, (err) => {
    if (!err) {
        console.log("Server Starting .");
        console.log("http://localhost:" + PORT);

    }
});