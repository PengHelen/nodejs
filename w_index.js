var server = require("./w_http");
var router = require("./w_router");

server.start(router.route);
