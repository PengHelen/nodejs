// var http = require("http");
// var url = require("url");

// function start(route) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");
//     route(pathname);
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.write("Hello World");
//     response.end();
//   }
//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started,http://127.0.0.1:8888/");
// }
// exports.start = start;

// 使用node创建web客户端
// 结合w_server.js使用
var http = require("http");

var options = {
  host: "localhost",
  port: "8081",
  path: "/index.html"
};

var callback = function(response) {
  var body = "";
  response.on("data", function(data) {
    body += data;
  });
  response.on("end", function() {
    console.log(body);
  });
};
var req = http.request(options, callback);
console.log("options", options);
req.end();
