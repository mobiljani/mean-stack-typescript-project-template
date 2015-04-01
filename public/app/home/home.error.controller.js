var app;
(function (app) {
    'use strict';
    ;
    var Error = (function () {
        function Error() {
            var vm = this;
        }
        return Error;
    })();
    angular.module('app.home').controller('app.home.ErrorController', Error);
})(app || (app = {}));
//# sourceMappingURL=home.error.controller.js.map