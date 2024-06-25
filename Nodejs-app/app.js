const http = require("http");

function rqListener(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello World</h1>");
  res.end("<h3>This is done</h3>");
}

const server = http.createServer(rqListener);

server.listen(5000);
