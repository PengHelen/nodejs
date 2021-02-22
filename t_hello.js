// var http = require("http");
// http
//   .createServer(function(request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Hello World\n");
//   })
//   .listen(8124);
// console.log("Server running at http://127.0.0.1:8124/");

// var punycode = require("punycode");
// var test1 = punycode.decode("maana-pta");
// var test2 = punycode.decode("--dqo34k");
// console.log("decode test:", test1, test2);
// var test3 = punycode.encode("mañana");
// var test4 = punycode.encode("☃-⌘");
// console.log("encode test:", test3, test4);
// console.log(__filename);
// console.log(__dirname);

// var cluster = require("cluster");
// var http = require("http");
// var numCPUs = require("os").cpus().length;

// if (cluster.isMaster) {
//   for (var i = 0; i < numCPUs; i++) {
//     cluster.worker();
//   }
//   cluster.on("exit", function(worker, code, signal) {
//     console.log("worker " + worker.process.pid + " died");
//   });
// } else {
//   http
//     .createServer(function(req, res) {
//       res.writeHead(200);
//       res.end("Hello World\n");
//     })
//     .listen(8000);
// }

// DNS
// var dns = require("dns");
// dns.lookup("www.google.com", function onLookup(err, addresses, family) {
//   console.log("addresses:", addresses);
// });
// var myData = {
//   myValue: 123,
//   bas: {
//     bas1: "some string",
//     bas2: 345
//   }
// };
// console.log(myData);

var http = require("http");
function handle_incoming_request(req, res) {
  console.log("INCOMING REQUEST:" + req.method + " " + req.url);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: null }) + "\n");
}
var s = http.createServer(handle_incoming_request);
s.listen(8080);
