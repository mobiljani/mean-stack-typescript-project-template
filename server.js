/// <reference path="typings/tsd.d.ts" />
var http = require('http');
var express = require("express");
var bodyParser = require("body-parser");
var odata = require('./server/api/odata');
(function () {
    "use strict";
    var app = express();
    app.use(express.static(__dirname + "/public"));
    app.use(bodyParser.urlencoded({ extended: true }));
    odata.init(app);
    app.get("/", function (req, res) {
        res.sendFile(__dirname + "/public/app/index.html");
    });
    var port = process.env.port || 1337;
    http.createServer(app).listen(port);
})();
//# sourceMappingURL=server.js.map