(():void => {
    'use strict';

    angular
        .module("app.northwind")
        .config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];

    function config($stateProvider: ng.ui.IStateProvider):void {

        $stateProvider
            .state('northwind', {
                url: '/northwind',
                templateUrl: '/app/northwind/views/index.html',
                controller: 'app.northwind.index.controller',
                controllerAs: 'vm'
            });
    }
})();
