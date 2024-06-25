const http = require("http");
const routes = require("./routes");
// const server = http.createServer((req, res) => {
//   const url = req.url;

//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>Enter Message</title></head>");
//     res.write(
//       `<body><form action='/message' method='POST'><input type="text" name="message" > <button type="submit">Submit</button></form></body>`
//     );

//     res.write("</html>");
//     return res.end();
//   }

//   if (url === "/message" && req.method === "POST") {
//     const body = [];

//     req.on("data", (chunk) => {
//       body.push(chunk);
//     });

//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body)
//         .toString()
//         .split("=")?.[1]
//         .replace(/\+/g, " ");
//       console.log("parsedBody", parsedBody);
//       fs.writeFileSync("hello.txt", parsedBody);
//     });
//     res.statusCode = 302;
//     res.setHeader("Location", "/");
//     return res.end();
//   }
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>Changes</title></head>");

//   res.write("</html>");
// });

const server = http.createServer(routes.requestHandler);

server.listen(5000);
