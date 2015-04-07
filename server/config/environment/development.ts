'use strict';

import _settings = require('../settings');
import ISettings = _settings.ISettings;

var settings: ISettings = {
    url: "http://localhost:1337/",
    port: 1337,
    mongo: {
        uri: "mongodb://localhost:27017/northwind",
        url: "localhost",
        port: 1337,
        user: null,
        password: null,
        name: "northwind",
        dbName: "northwind"
    }
};
export = settings;
