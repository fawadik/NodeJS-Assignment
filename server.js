// http server here

const http = require("http");

const server = http.createServer((req, res) => {
  const method = req.method;

  switch (method) {
    case "GET":
      res.write("GET method was sent");
      res.end();
      break;
    case "POST":
      res.write("POST method was sent");
      res.end();
      break;
    case "PUT":
      res.write("PUT method was sent");
      res.end();
      break;
    case "DELETE":
      res.write("DELETE method was sent");
      res.end();
      break;
    default:
      res.write("No Method found");
      res.end();
      break;
  }
});

server.listen(3000, (error) => {
  if (error) {
    console.log("error", error);
  }
  console.log("Server is listening on port 3000");
});
