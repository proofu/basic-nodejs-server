// jshint esversion:6
const http = require("http");

// Create server object
http
  .createServer((req, res) => {
    // write response
    res.write("hello world");
    res.end();
  })
  .listen(3000, () => {
    console.log("server running");
  });
