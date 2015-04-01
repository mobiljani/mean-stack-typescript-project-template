/// <reference path="typings/tsd.d.ts" />

import http = require('http');
import express = require("express");
import bodyParser = require("body-parser");

((): void => {
    "use strict";

    var app = express();
    //app.set("view engine", "html");
    //app.set("views", __dirname + "/server/views");
    app.use(express.static(__dirname + "/public"));
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get("/",(req, res) => {
        res.sendFile(__dirname + "/public/app/index.html");
    });

    var port = process.env.port || 1337;
    http.createServer(app).listen(port);

})();


