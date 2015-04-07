'use strict';

import _settings = require('../settings');
import ISettings = _settings.ISettings;

var settings: ISettings = {
    url: "http://tsmeantemplate.azurewebsites.net",
    port: 1337,
    mongo: {
        uri: "mongodb://northwind:OTGJIkZJEgvFkO_niyXljVGWphLUWfqWum8sAynDVhU-@ds045107.mongolab.com:45107/northwind",
        url: "ds045107.mongolab.com",
        port: 45107,
        user: "northwind",
        password: "OTGJIkZJEgvFkO_niyXljVGWphLUWfqWum8sAynDVhU-",
        name: "northwind",
        dbName: "northwind"
    }
};
export = settings;
