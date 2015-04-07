/// <reference path="../../typings/tsd.d.ts" />

import ex = require('express');
import _repository = require('../repository/repository');
import Repository = _repository.Repository;
import Collection = _repository.Collection;
import util = require('../utility');

var repository;

export var init = (app: ex.Express) => {
    repository = new Repository();
    configureRoutes(app);
}

// Generic approach to processing a Breeze client query

var configureRoutes = (app: ex.Express) => {

    app.post('/api/odata/saveChanges', saveChanges);

    app.get("/api/odata/:resource",(req, res, next) => {
        var resourceName = req.params.resource.toLowerCase();
        var query = repository[util.Enum.getValue(Collection, resourceName)];

        if (!!query) {
            query(req.query, makeResponseHandler(res, next));
        } else {
            next({ // 404 if the request does not map to a registered query
                statusCode: 404,
                message: "Unable to locate query for " + resourceName
            });
        }
    });

}

var makeResponseHandler = (res: ex.Response, next) => {
    // returns a function that handles response from a Breeze Mongo query or save
    return (err, results) => {
        if (err) {
            next(err);
        } else {
            // Prevent browser from caching results of API data requests
            res.setHeader('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
            res.setHeader("Content-Type:", "application/json");
            res.send(JSON.stringify(results));
        }
    }
};

var saveChanges = (req: ex.Request, res: ex.Response, next) => {
    var saveResponseHandler = makeResponseHandler(res, next);
    repository.saveChanges(req.body, saveResponseHandler);
}
