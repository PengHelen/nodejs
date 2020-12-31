// file read&write system module
"use strict";

var fs = require("fs");

//readFile
// async
// fs.readFile("sample.txt", "utf-8", function(err, data) {
//   if (err) {
//     console.log("err------", err);
//   } else {
//     console.log("data:", data);
//   }
// });

// fs.readFile("sample.png", function(err, data) {
//   if (err) {
//     console.log("img--err----", err);
//   } else {
//     console.log(data);
//     console.log(data.length + "bytes");
//     // buffer to string
//     var text = data.toString("utf-8");
//     console.log(text);
//     // string to buffer
//     var buf = Buffer.from(text, "utf-8");
//     console.log("buf-----", buf);
//   }
// });

//sync
// try {
//   var data2 = fs.readFileSync("sample1.txt", "utf-8");
//   console.log("data2---------", data2);
// } catch (err) {
//   console.log("err2--------", err);
// }

//writeFile
//async
// var writeData = "hello world,I'm writing code";
// fs.writeFile("output.txt", writeData, function(err) {
//   if (err) {
//     console.log("write---err---", err);
//   } else {
//     console.log("ok,have a look at your file,and the 'output.txt' is there");
//   }
// });
//sync
// try {
//   var writeData2 = "my file----,ooooh yeah!";
//   fs.writeFileSync("output2.txt", writeData2);
//   console.log("write ok!");
// } catch (err) {
//   console.log("This file already exists!");
// }

//get File's size,createTime and more

// fs.stat("sample.txt", function(err, stat) {
//   if (err) {
//     console.log("stat----err----", err);
//   } else {
//     console.log("isFile:", stat.isFile());
//     console.log("isDirectory:", stat.isDirectory());
//     if (stat.isFile()) {
//       console.log("size:", stat.size);
//       console.log("birth time:", stat.birthtime);
//       console.log("modified time:", stat.mtime);
//     }
//   }
// });

try {
  var stat = fs.statSync("sample.txt");
  console.log("isFile:", stat.isFile());
  console.log("isDirectory:", stat.isDirectory());
  if (stat.isFile()) {
    console.log("size:", stat.size);
    console.log("birth time:", stat.birthtime);
    console.log("modified time:", stat.mtime);
  }
} catch (err) {
  console.log("stat--err----", err);
}
