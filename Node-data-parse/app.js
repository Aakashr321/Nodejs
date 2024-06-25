const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      `<body><form action='/message' method='POST'><input type="text" name="message" > <button type="submit">Submit</button></form></body>`
    );

    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && req.method === "POST") {
    const body = [];
    let message;

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body)
        .toString()
        .split("=")?.[1]
        .replace(/\+/g, " ");
      console.log("parsedBody", parsedBody);
      fs.writeFileSync("hello.txt", parsedBody);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

server.listen(5000);
