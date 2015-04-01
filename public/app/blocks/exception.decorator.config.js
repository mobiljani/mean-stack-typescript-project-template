(function () {
    'use strict';
    angular.module('app.blocks.exception').config(exceptionConfig);
    exceptionConfig.$inject = ['$provide'];
    function exceptionConfig($provide) {
        $provide.decorator('$exceptionHandler', extendExceptionHandler);
    }
    extendExceptionHandler.$inject = ['$delegate', 'toaster'];
    function extendExceptionHandler($delegate, toastr) {
        return function (exception, cause) {
            $delegate(exception, cause);
            var errorData = {
                exception: exception,
                cause: cause
            };
            /**
             * Could add the error to a service's collection,
             * add errors to $rootScope, log errors to remote web server,
             * or log locally. Or throw hard. It is entirely up to you.
             * throw exception;
             */
            toastr.error(exception.message, errorData);
        };
    }
})();
//# sourceMappingURL=exception.decorator.config.js.map