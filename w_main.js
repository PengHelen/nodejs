// 异步编程-回调函数
// var fs = require("fs");

// // 阻塞，按顺序执行
// var data = fs.readFileSync("input.txt");

// console.log(data.toString());
// console.log("程序执行结束!");

// // 非阻塞，不需要按顺序
// // 如果需要处理回调函数的参数，我们就需要写在回调函数内
// fs.readFile("input1.txt", function(err, data) {
//   if (err) return console.log(err);
//   console.log(data.toString());
// });
// console.log("程序执行结束!同步");

// 事件循环
// var events = require("events");
// var eventEmitter = new events.EventEmitter();
// var connectHandler = function connected() {
//   console.log("连接成功。");
//   eventEmitter.emit("data_received");
// };

// eventEmitter.on("connection", connectHandler);
// eventEmitter.on("data_received", function() {
//   console.log("数据接收成功。");
// });
// eventEmitter.emit("connection");
// console.log("程序执行完毕。");

// 事件 EventEmitter 的核心就 是事件发射与事件监听器功能的封装
// var EventEmitter = require("events").EventEmitter;
// var event = new EventEmitter();
// event.on("some_event", function() {
//   console.log("some_event occured");
// });
// setTimeout(function() {
//   event.emit("some_event");
// }, 1000);

// var emitter = new events.EventEmitter();
// emitter.on("someEvent", function(arg1, arg2) {
//   console.log("listener1", arg1, arg2);
// });
// emitter.on("someEvent", function(arg1, arg2) {
//   console.log("listener2", arg1, arg2);
// });
// emitter.emit("someEvent", "byvoid", 1991);

// emitter.emit("error");

// Buffer 缓冲区
// buf = new Buffer(256);
// len = buf.write("www.w3cschool.cn");
// console.log("写入字节数：" + len);

// Buffer to String
// buf = new Buffer(26);
// for (var i = 0; i < 26; i++) {
//   buf[i] = i + 97;
// }
// console.log(buf.toString("ascii"));
// console.log(buf.toString("ascii", 0, 5));
// console.log(buf.toString("utf-8", 0, 5));
// console.log(buf.toString(undefined, 0, 5));

// Buffer to JSON
// var buf = new Buffer("www.w3cschool.cn");
// var json = buf.toJSON(buf);
// console.log(json);

// var buffer1 = new Buffer("W3Cschool教程");
// var buffer2 = new Buffer("www.w3cschool.cn");
// var buffer3 = Buffer.concat([buffer1, buffer2]);
// console.log("buffer3内容：" + buffer3);

// var buffer1 = new Buffer("ABC");
// var buffer2 = new Buffer("ABCD");
// var result = buffer1.compare(buffer2);

// if (result < 0) {
//   console.log(buffer1 + " 在 " + buffer2 + "之前");
// } else if (result == 0) {
//   console.log(buffer1 + " 与 " + buffer2 + "相同");
// } else {
//   console.log(buffer1 + " 在 " + buffer2 + "之后");
// }

// var fs = require("fs");
// var data = "";
// var readerStream = fs.createReadStream("input.txt");

// readerStream.setEncoding("UTF8");
// readerStream.on("data", function(chunk) {
//   data += chunk;
// });
// readerStream.on("end", function() {
//   console.log(data);
// });
// readerStream.prependOnceListener("error", function(err) {
//   console.log(err);
// });
// console.log('程序执行完毕')

// var data = "W3Cschool教程官网地址：www.w3cschool.cn";
// var writerStream = fs.createWriteStream("output.txt");
// writerStream.write(data, "UTF8");
// writerStream.end();
// writerStream.on("finish", function() {
//   console.log("写入完成。");
// });
// writerStream.on("error", function(err) {
//   console.log(err.stack);
// });
// console.log("程序执行完毕");

// var zlib = require("zlib");

// 文件压缩
// fs.createReadStream("input.txt")
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream("input.txt.gz"));
// console.log("文件压缩完成");

// 文件解压
// fs.createReadStream("input.txt.gz")
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream("input_1.txt"));
// console.log("文件解压完成");

// var hello = require("./hello");
// hello.world();

// console.log("-----divider------");
// var Hello = require("./hello");
// hello = new Hello();
// hello.setName("byvoid");
// hello.sayHello();

// var http = require("http");
// http
//   .createServer(function(request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.write("Hello World");
//     response.end();
//   })
//   .listen(8888);

// 函数
// function onRequest(reques, response) {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.write("Hello World");
//   response.end();
// }
// http.createServer(onRequest).listen(8888);

// console.log("Server runnint at http://127.0.0.1:8888/");

// 全局变量
// console.log(process.argv)
// console.trace()

var util = require("util");
// function Base() {
//   this.name = "base";
//   this.base = 1991;
//   this.sayHello = function() {
//     console.log("Hello " + this.name);
//   };
// }
// Base.prototype.showName = function() {
//   console.log(this.name);
// };
// function Sub() {
//   this.name = "sub";
// }
// util.inherits(Sub, Base);
// var objBase = new Base();
// objBase.showName();
// objBase.sayHello();
// console.log(objBase);
// var objSub = new Sub();
// objSub.showName();
// // objSub.sayHello();
// console.log(objSub);

// function Person() {
//   this.name = "byvoid";
//   this.toString = function() {
//     return this.name;
//   };
// }
// var obj = new Person();
// console.log(util.inspect(obj));
// console.log(util.inspect(obj, true));

// console.log(util.isArray([]));
// console.log(util.isArray(new Array()));
// console.log(util.isArray({}));


