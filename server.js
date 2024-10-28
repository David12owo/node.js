// create a server that listens to port 3000

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end("<h1>Hello World!!!<h1>\n");
// });

//server.listen(3000, () => {
// console.log("Server running at http://localhost:3000/");
//});

// create a file name"welcome.txtt" and write "Hello Node" to it

const fs = require("fs/promises");
(async () => {
  try {
    await fs.writeFile("welcome.txt", "Hello Node");
    const data = await fs.readFile("welcome.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
})();
