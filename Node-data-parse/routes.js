const fs = require("fs");

const requestHandler = (req, res) => {
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

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedMessage = Buffer.concat(body)
        .toString()
        .split("=")?.[1]
        .replace(/\+/g, " ");
      fs.writeFile("hello.txt", parsedMessage, (err) => {
        console.log("error", err);
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Changes</title></head>");
  res.write("</html>");
  return res.end();
};

module.exports = { requestHandler: requestHandler };
