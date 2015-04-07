/// <reference path="../../typings/tsd.d.ts" />

var bmongo = require("breeze-mongodb");
import database = require("./database");
import utility = require('../utility');

export interface IRepositoryArray {
    [index: number]: any;
}

export enum Collection {
    category,
    customer,
    employee,
    orders,
    product,
    region,
    shipper,
    supplier,
    territory
}

export class Repository implements IRepositoryArray {

[index: number]: any;

    constructor() {
        this.addQueries();
    }

    query(collection:Collection, queryString:string, next) {
        var query = this[collection];
        query(queryString, next);
    }

    addQueries = ():void => {

        var makeCollectionQueryFor = (collectionEnumValue:number) => {
            this[collectionEnumValue] = (queryString:string, next) => {
                this.getDb(db => {
                    var query = new bmongo.MongoQuery(queryString);
                    query.execute(db, Collection[collectionEnumValue], next);
                }, next);
            };
        };

        utility.Enum.getValues(Collection).forEach(makeCollectionQueryFor);
    };

    getDb(callback, next):void {
        database.getDb((err, db) => {
            if (err) {
                next(err);
            } else {
                try {
                    callback(db.database); // assume callback knows about 'next'
                } catch (e) {
                    err = new Error('Died in the repository; review server console');
                    err.stack = e.stack;
                    err.innerError = e;
                    next(err);
                }
            }
        });
    }

    saveChanges(saveBundle, next):void {
        this.getDb(save, next);
        function save(db) {
            var saveProcessor = new bmongo.MongoSaveHandler(db, saveBundle, next);
            this.setSaveMetadata(saveProcessor.metadata);
            this.addSaveInterceptors(saveProcessor);
            saveProcessor.save();
        };
    }

    setSaveMetadata(saveMetadata):void {
        for (var key in saveMetadata) {
            var entityType = saveMetadata[key];
            // entityTypes have collection names
            // presence of the defaultResourceName indicates it is an entityType, not a complexType
            if (entityType.defaultResourceName) {
                var name = entityType.entityTypeName;
                var len = name.indexOf(':');
                entityType.collectionName = len > -1 ? name.substr(0, len) : name;
            }
        }
    }

    addSaveInterceptors(saveProcessor):void {

        saveProcessor.beforeSaveEntity = (entity) => {
            // do stuff
            console.log("repository: beforeSaveEntity called for " + JSON.stringify(entity));
            return true; // if we want to keep this one
        };

        saveProcessor.beforeSaveEntities = function (continueSave) {
            // do stuff
            //var saveMap = this.saveMap;
            //var count = 0;
            //for (var t in saveMap) {
            //    count += saveMap[t].length;
            //}
            //console.log("repository: beforeSaveEntities called for " + count + " entities");
            continueSave();
        };

        saveProcessor.afterSaveEntities = function (done) {
            // do stuff
            console.log('repository: afterSaveEntities called');
            var sr = this.saveResult;
            var msg = ["  inserted: " + sr.insertedKeys.length];
            msg.push("  updated: " + sr.updatedKeys.length);
            msg.push("  deleted: " + sr.deletedKeys.length);
            msg.push("  keyMappings: " + sr.keyMappings.length);
            if (sr.errors) {
                msg.push("  errors: " + sr.errors.length);
            }
            console.log("repository: afterSaveEntities saveResult counts:\n" + msg.join('\n'));
            done();
        };
        /**/
    }
}