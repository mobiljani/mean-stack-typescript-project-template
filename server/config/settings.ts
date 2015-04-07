///<reference path="../../typings/node/node.d.ts"/>
'use strict';

export interface ISettings {
    mongo: {
        uri: string;
        url: string;
        port: number;
        user: string;
        password: string;
        name: string;
        dbName: string;
    }
}   

// Utilize Lo-Dash utility library
var _ = require('lodash'),
    fs = require('fs');

// Load configurations
// Set the node environment variable if not set before
//process.env.NODE_ENV = ~fs.readdirSync('./env').map(function (file) {
//    return file.slice(0, -3);
//}).indexOf(process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';

// Extend the base configuration in all.js with environment
// specific configuration
export var settings: ISettings = _.extend(
    require('./environment/all'),
    require('./environment/' + process.env.NODE_ENV) || {}
);