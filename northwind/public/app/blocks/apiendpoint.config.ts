(():void => {
    'use strict';

    angular
        .module('app.blocks')
        .config(config);

    config.$inject = ['app.blocks.ApiEndpointProvider'];
    function config(apiEndPointProvider:app.blocks.IApiEndpointProvider):void {
        apiEndPointProvider.configure('api');
    }
})();