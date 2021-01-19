const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer( (req, res) => {
    switch (req.url) {
        case "/":
            res.writeHead(200, {"Content-Type":"text/html"});
            fs.readFile("index.html", (error, data) => {
                if (error) {
                    res.writeHead(404);
                    res.write("index.html not found");
                } else {
                    res.write(data);
                }
                res.end();
            })
            break;
        case "/style.css":
            res.writeHead(200, {"Content-Type":"text/css"});
            fs.readFile("style.css", (error, data) => {
                if (error) {
                    res.writeHead(404);
                    res.write("style.css not found");
                } else {
                    res.write(data);
                }
                res.end();
            })
            break;
        case "/index.js":
            res.writeHead(200, {"Content-Type":"text/js"});
            fs.readFile("index.js", (error, data) => {
                if (error) {
                    res.writeHead(404);
                    res.write("index.js not found");
                } else {
                    res.write(data);
                }
                res.end();
            })
            break;
        case "/img/male_icon.png":
            res.writeHead(200, {"Content-Type":"image/png"});
            fs.readFile("./images/male_icon.png", (error, data) => {
                if (error) {
                    res.writeHead(404);
                    res.write("images/male_icon.png not found");
                } else {
                    res.write(data);
                }
                res.end();
            })
            break;
        case "/img/female_icon.png":
            res.writeHead(200, {"Content-Type":"image/png"});
            fs.readFile("./images/female_icon.png", (error, data) => {
                if (error) {
                    res.writeHead(404);
                    res.write("images/female_icon.png not found");
                } else {
                    res.write(data);
                }
                res.end();
            })
            break;
    }
})

server.listen(port, function(error) {
    if (error) {
        console.log("Something went wrong on server start.")
    } else {
        console.log("Server running on port : ", port)
    }
})