'use strict';

import _settings = require('../settings');
import ISettings = _settings.ISettings;

var settings: ISettings = {
    url: "http://localhost:1337/",
    port: 1337,
    mongo: {
        uri: "mongodb://localhost:27017/signalflow",
        url: "localhost",
        port: 1337,
        user: "signalflow",
        password: "password",
        name: "signalflow",
        dbName: "signalflow"
    }
};
export = settings;
