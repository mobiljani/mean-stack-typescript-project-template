/// <reference path="../../typings/tsd.d.ts" />

import mongodb = require("mongodb");
import _settings = require("../config/settings");
import settings = _settings.settings;

var mongoClient = mongodb.MongoClient;
var db = null;
var mongoUri = settings.mongo.uri;
var mongoOptions = {
    server: { auto_reconnect: true }
};

export var getDb = (next) => {
    if (db) {
        next(null, db);
    } else {
        mongoClient.connect(mongoUri, mongoOptions, (err, theDb) => {
            if (err) {
                err.message = (err.message || '') + '. Is the MongoDb server running?';
                next(err, null);
            } else {
                db = {
                    database: theDb,
                    category: theDb.collection("category"),
                    customer: theDb.collection("customer"),
                    employee: theDb.collection("employee"),
                    orders: theDb.collection("orders"),
                    product: theDb.collection("product")
                }
                next(null, db);
            }
        });
    }
}