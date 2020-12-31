"use strict";
// 同源策略 Homologous strategy 协议，域名，端口

var fs = require("fs"),
  url = require("url"),
  path = require("path"),
  http = require("http");

// var server = http.createServer(function(request, response) {
//   console.log(request.method + ":" + request.url);
//   response.writeHead(200, { "Content-Type": "text/html" });
//   response.end("<h1>Hello World!</h1>");
// });

// server.listen(8080);
// console.log("Server is running at http://127.0.0.1:8080");

// 输出url对象
// console.log(
//   url.parse("https://user:pass@host.com:8080/path/to/file?query=string#hash")
// );

// var workDir = path.resolve(".");

// var filePath = path.join(workDir, "pub", "index.html");

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || ".");
console.log("Static root dir:" + root);

// 只要当前目录下存在文件index.html，服务器就可以把文件内容发送给浏览器。
// 实验时需要新建index.html文件
var server = http.createServer(function(request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log(pathname);
  var filepath = path.join(root, pathname);
  fs.stat(filepath, function(err, stats) {
    if (!err && stats.isFile()) {
      console.log("200" + request.url);
      response.writeHead(200);
      fs.createReadStream(filepath).pipe(response);
    } else {
      console.log("404", +request.url);
      response.writeHead(404);
      response.end("404 Not Found");
    }
  });
});

server.listen(8080);
// 为了方便点开浏览器直接运行，在提示语句后面添加index.html
console.log("Server is running at http://127.0.0.1:8080/index.html");
