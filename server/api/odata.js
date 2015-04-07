/// <reference path="../../typings/tsd.d.ts" />
var _repository = require('../repository/repository');
var Repository = _repository.Repository;
var Collection = _repository.Collection;
var util = require('../utility');
var repository;
exports.init = function (app) {
    repository = new Repository();
    configureRoutes(app);
};
// Generic approach to processing a Breeze client query
var configureRoutes = function (app) {
    app.post('/api/odata/saveChanges', saveChanges);
    app.get("/api/odata/:resource", function (req, res, next) {
        var resourceName = req.params.resource.toLowerCase();
        var query = repository[util.Enum.getValue(Collection, resourceName)];
        if (!!query) {
            query(req.query, makeResponseHandler(res, next));
        }
        else {
            next({
                statusCode: 404,
                message: "Unable to locate query for " + resourceName
            });
        }
    });
};
var makeResponseHandler = function (res, next) {
    // returns a function that handles response from a Breeze Mongo query or save
    return function (err, results) {
        if (err) {
            next(err);
        }
        else {
            // Prevent browser from caching results of API data requests
            res.setHeader('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
            res.setHeader("Content-Type:", "application/json");
            res.send(JSON.stringify(results));
        }
    };
};
var saveChanges = function (req, res, next) {
    var saveResponseHandler = makeResponseHandler(res, next);
    repository.saveChanges(req.body, saveResponseHandler);
};
//# sourceMappingURL=odata.js.map