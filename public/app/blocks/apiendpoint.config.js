(function () {
    'use strict';
    angular.module('app.blocks').config(config);
    config.$inject = ['app.blocks.ApiEndpointProvider'];
    function config(apiEndPointProvider) {
        apiEndPointProvider.configure('api');
    }
})();
//# sourceMappingURL=apiendpoint.config.js.map