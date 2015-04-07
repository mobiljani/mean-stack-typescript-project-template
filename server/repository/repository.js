/// <reference path="../../typings/tsd.d.ts" />
var bmongo = require("breeze-mongodb");
var database = require("./database");
var utility = require('../utility');
(function (Collection) {
    Collection[Collection["category"] = 0] = "category";
    Collection[Collection["customer"] = 1] = "customer";
    Collection[Collection["employee"] = 2] = "employee";
    Collection[Collection["orders"] = 3] = "orders";
    Collection[Collection["product"] = 4] = "product";
    Collection[Collection["region"] = 5] = "region";
    Collection[Collection["shipper"] = 6] = "shipper";
    Collection[Collection["supplier"] = 7] = "supplier";
    Collection[Collection["territory"] = 8] = "territory";
})(exports.Collection || (exports.Collection = {}));
var Collection = exports.Collection;
var Repository = (function () {
    function Repository() {
        var _this = this;
        this.addQueries = function () {
            var makeCollectionQueryFor = function (collectionEnumValue) {
                _this[collectionEnumValue] = function (queryString, next) {
                    _this.getDb(function (db) {
                        var query = new bmongo.MongoQuery(queryString);
                        query.execute(db, Collection[collectionEnumValue], next);
                    }, next);
                };
            };
            utility.Enum.getValues(Collection).forEach(makeCollectionQueryFor);
        };
        this.addQueries();
    }
    Repository.prototype.query = function (collection, queryString, next) {
        var query = this[collection];
        query(queryString, next);
    };
    Repository.prototype.getDb = function (callback, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            }
            else {
                try {
                    callback(db.database); // assume callback knows about 'next'
                }
                catch (e) {
                    err = new Error('Died in the repository; review server console');
                    err.stack = e.stack;
                    err.innerError = e;
                    next(err);
                }
            }
        });
    };
    Repository.prototype.saveChanges = function (saveBundle, next) {
        this.getDb(save, next);
        function save(db) {
            var saveProcessor = new bmongo.MongoSaveHandler(db, saveBundle, next);
            this.setSaveMetadata(saveProcessor.metadata);
            this.addSaveInterceptors(saveProcessor);
            saveProcessor.save();
        }
        ;
    };
    Repository.prototype.setSaveMetadata = function (saveMetadata) {
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
    };
    Repository.prototype.addSaveInterceptors = function (saveProcessor) {
        saveProcessor.beforeSaveEntity = function (entity) {
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
    };
    return Repository;
})();
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map